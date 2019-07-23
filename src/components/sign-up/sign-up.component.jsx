import React, { Component } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { signUpStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectedUserError } from '../../redux/user/user.selectors';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: '',
        }
    }

    componentWillReceiveProps(nextProps,nextContext) {
        const { userError } = nextProps;

        if(userError) {
            this.setState({ error: userError.message });
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({ displayName, email, password });
    }

    handleChange = (e,type) => {
        this.setState({ [type]: e.target.value })
    }

    render() {
        const { displayName, email, password, confirmPassword, error } = this.state;
        const { userError } = this.props;

        return (
            <div className={ 'sign-up' } >
                <h2 className={ 'title' }>I do not have a account</h2>
                <span>Sign up with your e-mail and password</span>
                <form className={ 'sign-up-form' } onSubmit={ this.handleSubmit }>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={ displayName }
                        onChange={ (e) => this.handleChange(e,'displayName') }
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={ email }
                        onChange={ (e) => this.handleChange(e,'email') }
                        label='E-mail'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={ password }
                        onChange={ (e) => this.handleChange(e,'password') }
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={ confirmPassword }
                        onChange={ (e) => this.handleChange(e,'confirmPassword') }
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

                {
                    error &&
                        <SweetAlert
                            show={ error }
                            type='warning'
                            title='Something went wrong!'
                            text={ userError }
                            onConfirm={ () => this.setState({ 
                                displayName: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                error: '', }) 
                            }
                        />
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    userError: selectedUserError,
})

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);