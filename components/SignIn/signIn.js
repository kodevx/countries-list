'use client';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

import useSignIn from '@/customHooks/SignIn/useSignIn';

const SignIn = props => {

    const { 
        handleSubmit,
        handleValidation
    } = useSignIn();

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={handleValidation}
                onSubmit={(formValues) => console.log('formValues: ',formValues)}
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="emailOrUsername" 
                                placeholder="Enter email or username"
                                onChange={handleChange}
                                value={values.emailOrUsername}
                                isValid={touched && !errors.emailOrUsername}
                                isInvalid={!!errors.emailOrUsername}
                            />
                            <Form.Control.Feedback type="valid">
                                Looks good
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                type="password" 
                                placeholder="Enter password"
                                onChange={handleChange}
                                value={values.password}
                                isValid={touched && !errors.password}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="valid">
                                Strong Passsword
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="checkbox">
                            <Form.Check 
                                id="checkBoxValidation"
                                type="checkbox" 
                                label="Keep me signed in" 
                                required
                                onChange={handleChange}
                                isInvalid={!!errors.keepMeSignedIn}
                                feedback={errors.keepMeSignedIn}
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <button type='submit'>
                            SignIn
                        </button> 
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignIn;
