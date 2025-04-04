import React from 'react';

const useSignIn = props => {

    const handleValidation = (values) => {
        console.log("validation Callback")
    }

    const handleSubmit = (values) => {
        console.log("handleSubmit Callback")
    }

    return {
        handleSubmit,
        handleValidation
    }
}

export default useSignIn;
