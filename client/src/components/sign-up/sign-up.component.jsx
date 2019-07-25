import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { signUpStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { selectedUserError } from '../../redux/user/user.selectors';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ userError, signUpStart }) => {
    const [userDetails, setUserDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        showError: false,
    })

    const { displayName, email, password, confirmPassword, error, showError } = userDetails;

    useEffect(() => {
        if(userError) {
            setUserDetails({ ...userDetails, error: userError.message, showError: true });
        }
    } ,[userError])

    const handleSubmit = async e => {
        e.preventDefault();

        if(password !== confirmPassword && !error.length) {
            setUserDetails({ ...userDetails, error: "Passwords do not match.", showError: true });
            return;
        }
        signUpStart({ displayName, email, password });
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails({ ...userDetails, [name]: value, error: '', showError: false })
    }

    

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your e-mail and password</span>
            <form className={ 'sign-up-form' } onSubmit={ handleSubmit }>
                <FormInput
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange={ handleChange }
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={ email }
                    onChange={ handleChange }
                    label='E-mail'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ handleChange }
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ handleChange }
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

            {
                error &&
                    <SweetAlert
                        show={ showError }
                        type='warning'
                        title='Something went wrong!'
                        text={ error }
                        onConfirm={ () => setUserDetails({ ...userDetails, error: '', showError: false }) }
                    />
            }
        </SignUpContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    userError: selectedUserError,
})

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);