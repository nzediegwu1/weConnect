import React from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import classnames from 'classnames';
// validations
import signupValidator from '../../validation/singupValidation';

// actions
import { signUpUsers } from '../../actions/auth';


/**
 * @description Creates Signup Feature
 *
 * @class SignupForm
 *
 * @extends {React.Component}
 */
class SignupForm extends React.Component {
    /**
   * @description Creates an instance of SignupFrom
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof SignupForm
   *
   * @returns {void}
   */
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
  * @description Bind the value of the inputs to state
  *
  * @method onChange
  *
  * @memberof SignupForm
  *
  * @param {any} event
  *
  * @returns {void}
  */
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    /**
   * @description Validates user's data before making post request
   *
   * @method isValid
   *
   * @memberof Signup
   *
   * @returns {boolean} true or false
   */
    isValid() {
        const { isValid, errors } = signupValidator(this.state);
        if (!isValid) {
            this.setState({ errors });
        } else {
            this.setState({ errors: {} });
            return isValid;
        }
    }
    /**
  * @description Handles Form Submission
  *
  * @method onSubmit
  *
  * @param {object} event
  *
  * @memberof SignupForm
  *
  * @returns {void}
  */
    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.signUpUsers(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome!'
                    });
                    this.context.router.history.push('/business')
                },
               (error) => this.setState({ errors: error.response.data, isLoading: false }),
            );
        }
    }
    /**
     * @description Render react component
     *
     * @method render
     *
     * @memberof SignupForm
     *
     * @returns {void}
     *
     */
    render() {
        const { errors, err } = this.state;
        return (
            <div className="col-lg-4">
                <div className="card bg-primary text-center card-form">
                    <div className="card-body">
                        <h3 className="text-white">Sign Up</h3>
                        <h6 className="font-weight-light text-white">
                            Create an account
            
                            
                      </h6>
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                type="text"
                                placeholder="username"
                                field="username"
                                error={errors.username}
                                error={errors.usernameConflict}
                                value={this.state.username}
                                onChange={this.onChange}
                                err={err}
            
                                
                            />
                            <TextFieldGroup
                                type="email"
                                placeholder="email"
                                field="email"
                                error={errors.email}
                                error={errors.emailConflict}
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <TextFieldGroup
                                type="password"
                                placeholder="password"
                                field="password"
                                error={errors.password}
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <TextFieldGroup
                                type="password"
                                placeholder="confirm password"
                                field="confirmPassword"
                                error={errors.confirmPassword}
                                value={this.state.passwordConfirm}
                                onChange={this.onChange}
                            />


                            <button disabled={this.state.isLoading} className="btn btn-warning btn-block">
                                <i className="fa fa-user-plus" aria-hidden="true" /> Sign
                          Up
                        </button>
                        </form>
                        <hr />
                        <h6 className="text-white">
                            Forgotten your password?
                        <a className="text-white" href="#">
                                Recover it
                        </a>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
};

SignupForm.propTypes = {
    signUpUsers: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}


export default SignupForm;