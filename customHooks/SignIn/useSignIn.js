'use client';
import { useCallback } from 'react';
import useUserDetails from '@/redux/actions/users';
import { validatePassword, validateUsernameOrEmail } from '@/utils/getValidation';

const useSignIn = props => {

    const initialValues = { usernameOrEmail: "", password: "" };

    const [{ handleSignIn }] = useUserDetails();

    const handleValidation = useCallback(
        (values) => {
            const errors = {};

            console.log("Validation Values: ",values);

            errors.password = validatePassword(values.password);
            errors.usernameOrEmail = validateUsernameOrEmail(values.usernameOrEmail);
            
            console.log("Errors: ",errors);

            return errors;
        },
        []
    );

    const handleSubmitForm = useCallback(
        ({ usernameOrEmail, password }) => {
            try {
                console.log("handleFormSubmit Callback: ",usernameOrEmail, password);

                if(usernameOrEmail && password) {
                    handleSignIn(usernameOrEmail);
                }
            } catch(error) {
                console.log("SignIn Submit Error: ", error);
            }
        },
        [handleSignIn]
    );

    return {
        initialValues,
        handleSubmitForm,
        handleValidation
    }
}

export default useSignIn;
