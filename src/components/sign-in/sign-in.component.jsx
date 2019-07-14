import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (e,type) => {
        this.setState({ [type]: e.target.value })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className={ 'sign-in' }>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name='email'
                        type='email'
                        value={ email }
                        handleChange={ (e) => this.handleChange(e,'email') }
                        label='E-Mail'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={ password }
                        handleChange={ (e) => this.handleChange(e,'password') }
                        label='Password'
                        required
                    />
                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;