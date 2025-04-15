'use client';
import { useCallback } from 'react';
import useUserDetails from '@/redux/actions/users';
import { validatePassword, validateUsernameOrEmail } from '@/utils/getValidation';
import { redirect } from 'next/navigation';

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
            let redirectPath = '/login';
            try {
                console.log("handleFormSubmit Callback: ",usernameOrEmail, password);

                if(usernameOrEmail && password) {
                    handleSignIn(usernameOrEmail);
                }

                redirectPath = '/';
            } catch(error) {
                console.log("SignIn Submit Error: ", error);
                redirect = '/login';
            } finally {
                redirect(redirectPath);
            }
        },
        [handleSignIn, redirect]
    );

    return {
        initialValues,
        handleSubmitForm,
        handleValidation
    }
}

export default useSignIn;
