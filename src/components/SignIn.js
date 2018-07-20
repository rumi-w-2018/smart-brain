import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSigninClicked = e => {
    e.preventDefault(); // Important - otherwise form will try to submit.
    this.props.handleSignIn(this.state.email, this.state.password);
  };

  render() {
    return (
      <article className="br3 shadow-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center ">
        <main className="pa4 black-80 ">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 tc">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2"
                  onChange={this.handleEmailChange}
                  type="email"
                  name="email-address"
                  id="email-address"
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
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                className="b ph3 pv2 input-reset ba br2 b--black bg-transparent grow pointer f6 dib pointer"
                onClick={this.onSigninClicked}
                type="submit"
                value="Sign In"
              />
            </div>
            <div className="lh-copy mt3 center">
              <a href="#0" className="f6 link dim black db pointer" onClick={this.props.onRegisterBtnClick}>
                Register
              </a>
            </div>
            {this.props.isError ? (
              <div className="ma1 center bg-light-yellow ">
                <p href="#0" className="f5 dim black db">
                  Error - Unable to sign in.
                </p>
              </div>
            ) : null}
          </form>
        </main>
      </article>
    );
  }
}

export default SignIn;
