import React, { Component } from 'react';
import './sign-in.styles.scss';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
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

    handleSubmit = async e => {
        e.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = (e,type) => {
        this.setState({ [type]: e.target.value })
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;

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
                    <div className={ 'buttons' }>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton
                            type='button'
                            isGoogleSignIn
                            onClick={ googleSignInStart }
                        >
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null,mapDispatchToProps)(SignIn);