import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Particles from 'react-particles-js';
import Navigation from './Navigation';
import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import SignIn from './SignIn';
import Register from './Register';
import { signOutUser, signIn, register } from '../actions';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'signin',
      status: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isError) {
      this.setState({
        status: 'error'
      });
    } else if (nextProps.user.isPending) {
      this.setState({
        status: 'pending'
      });
    } else if (nextProps.user.signedIn) {
      this.setState({
        route: 'app'
      });
    }
  }

  onSignOutClick = () => {
    this.props.signOutUser();
    this.setState({
      route: 'signin',
      status: ''
    });
  };

  handleSignIn = (email, password) => {
    this.setState(
      {
        status: ''
      },
      () => {
        this.props.signIn(email, password);
      }
    );
  };

  handleRegister = (name, email, password) => {
    this.props.register(name, email, password);
  };

  onRegisterBtnClick = () => {
    this.setState({
      route: 'register',
      status: ''
    });
  };

  render() {
    return (
      <div className="App w-100">
        <Particles className="particles" params={particlesOptions} />
        <Navigation signedIn={this.props.user.signedIn} onSignOutClick={this.onSignOutClick} />
        <Logo />
        {this.state.route === 'app' ? (
          <Fragment>
            {/* <Count /> */}
            <ImageLinkForm />
          </Fragment>
        ) : this.state.route === 'register' ? (
          <Register handleRegister={this.handleRegister} status={this.state.status} />
        ) : this.state.route === 'signin' ? (
          <SignIn
            handleSignIn={this.handleSignIn}
            onRegisterBtnClick={this.onRegisterBtnClick}
            status={this.state.status}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signOutUser, signIn, register }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
