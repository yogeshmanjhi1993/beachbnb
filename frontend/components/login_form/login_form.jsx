import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { user: this.state };
    this.props.login(user, this.props.closeModal);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
		return(
			<ul className="form-errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  guestLogin() {
    const guest = { user: { email: "guest@user.com", password: "guestpass" } };
    this.props.login(guest, this.props.closeModal);
  }

  render() {
    return (
      <div className="login-form-div" onSubmit={this.handleSubmit}>
        <a href="/auth/google_oauth2/" className="google-link">
          <div className="google-logo"></div>
          <p>Sign in with Google</p>
        </a>
        <div className="separator">
          <div className="separator-line"> </div>
          <p>or</p>
          <div className="separator-line"> </div>
        </div>
        { this.renderErrors() }
        <form className="login-form-box">
          <div className="input-item">
            <input type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input form-input"
              placeholder="Email address" />
            <i className="fa fa-envelope-o login-input-icon login-email-icon" aria-hidden="true"></i>
          </div>

          <div className="input-item">
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input form-input"
              placeholder="Password" />
            <i className="fa fa-lock login-input-icon login-lock-icon" aria-hidden="true"></i>
          </div>

          <input type="submit" value="Log in" className="user-submit" />
          <input type="button"
                 value="Guest Log in"
                 className="user-submit guest-login"
                 onClick={this.guestLogin} />
        </form>
      </div>
    );
  }
}

export default LoginForm;
