'use client';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

import useSignIn from '@/customHooks/SignIn/useSignIn';

const SignIn = props => {

    const { 
        handleSubmitForm,
        initialValues,
        handleValidation
    } = useSignIn();

    return (
        <div>
            <h4 className='fw-bolder fs-1 mb-3'>
                Sign In
            </h4>
            <div className='my-4'>
                <span className='me-3 fw-bold'>New User?</span>
                <span className='fw-bold text-primary'>Create an account</span>
            </div>
            <Formik
                initialValues={initialValues}
                validate={(values) => handleValidation(values)}
                onSubmit={console.log}
            >
                {({ values, touched, handleChange, errors, handleSubmit }) => (
                    <Form 
                        noValidate 
                        onSubmit={(e) => {
                            e.preventDefault(); 
                            handleSubmit(values); 
                            handleSubmitForm(values); 
                        }}>
                        <Form.Group className='mb-3'>
                            <Form.Control
                                type="text" 
                                name="usernameOrEmail"
                                placeholder="Username or email"
                                onChange={handleChange}
                                value={values.usernameOrEmail}
                                isValid={
                                    touched && 
                                    touched.usernameOrEmail && 
                                    errors.usernameOrEmail === ''
                                }
                                isInvalid={!!errors.usernameOrEmail}
                                className='border border-dark border-3 p-2'
                            />
                            <Form.Control.Feedback type="valid">
                                Looks good
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors.usernameOrEmail}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Control
                                type="password" 
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={values.password}
                                isValid={
                                    touched && 
                                    touched.password && 
                                    errors.password === ''
                                }
                                isInvalid={!!errors.password}
                                className='border border-dark border-3 p-2'
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
                                id="checkBox"
                                type="checkbox" 
                                label="Keep me signed in" 
                                required
                                onChange={handleChange}
                                feedback={errors.keepMeSignedIn}
                                feedbackType="invalid"
                                className={'fw-bold'+' checkbox'}
                            />
                        </Form.Group>
                        <button className='bg-dark text-light rounded-none w-100 py-2 mt-2' type='submit'>
                            Sign In
                        </button> 
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignIn;
