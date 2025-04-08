
const SUCCESS = '';

export const validateUsernameOrEmail = (value) => {
    const regex = /^[a-zA-Z0-9_]+@[a-z]+[.]{1}[a-z\D]{1,3}$/g;

    return regex.test(value) ? SUCCESS : 'Enter a valid username eg.johndoe@gmail.com'
}

export const validatePassword = (value) => {
    const count = {
        // lower: 0,
        upper: 0,
        digit: 0,
        special: 0
    };
    
    for (const char of value) {   
        if (/[a-z]/.test(char)) count.lower++;
        else if (/[A-Z]/.test(char)) count.upper++;
        else if (/\d/.test(char)) count.digit++;
        else if (/\S/.test(char)) count.special++;
    }

    const passwordLength = Object.values(count).reduce(
        (acc, currentValue) => acc + currentValue,
        0
    );

    if(passwordLength === 0){
        return 'This field is required.'
    }
    
    if (
        passwordLength <= 8 || 
        Object.values(count).filter(Boolean) < 3
    ) { 
        return 'The password must be atleast 8 characters long and have one of the following: an uppercase, a digit and a special character.';
    } 

    return SUCCESS;
}