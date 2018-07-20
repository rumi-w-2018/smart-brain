import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = e => {
    console.log('pss', e.target.value);
    this.setState({
      password: e.target.value // Important - otherwise form will try to submit.
    });
  };

  onRegisterClick = e => {
    e.preventDefault();
    this.props.handleRegister(this.state.name, this.state.email, this.state.password);
  };

  render() {
    return (
      <article className="br3 shadow-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center ">
        <main className="pa4 black-80 ">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 tc">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2"
                  onChange={this.handleNameChange}
                  type="userName"
                  name="user-name"
                  id="user-names"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2"
                  onChange={this.handleEmailChange}
                  type="email"
                  name="register-email"
                  id="register-email"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2"
                  onChange={this.handlePasswordChange}
                  type="password"
                  name="register-password"
                  id="register-password"
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                className="b ph3 pv2 input-reset ba br2 b--black bg-transparent grow pointer f6 dib pointer"
                onClick={this.onRegisterClick}
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Register;
