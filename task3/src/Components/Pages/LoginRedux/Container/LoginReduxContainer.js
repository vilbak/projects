/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { connect } from 'react-redux';
import LoginReduxView from '../Component/LoginReduxView';
import { emailEnter, passwordEnter, clearData } from '../Actions';


class LoginReduxContainer extends React.Component {
  componentDidMount() {
    this.props.clearData();
  }

    changeEmail = (event) => {
      this.props.emailEnter(event.target.value);
    };

    changePassword = (event) => {
      this.props.passwordEnter(event.target.value);
    }

    pressButton =() => {
      if (this.props.password.length >= 6 && this.props.email.length >= 6) {
        this.props.history.push('login-redux/success');
      } else {
        console.log('Password and E-mail must be 6 or more symbols');
      }
    }

    handleSubmit= (event) => {
      event.preventDefault();
      this.pressButton();
    };

    render() {
      const props = {
        changeEmail: this.changeEMail,
        changePassword: this.changePassword,
        email: this.props.Email,
        password: this.props.password,
      };

      return <LoginReduxView {...props} />;
    }
}

function mapDispatchToProps(dispatch) {
  return {
    emailEnter: email => dispatch(emailEnter(email)),
    passwordEnter: password => dispatch(passwordEnter(password)),
    clearData: () => dispatch(clearData()),
  };
}

function mapStateToProps(state) {
  return {
    email: state.login.email,
    password: state.login.password,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginReduxContainer);
