import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { user: this.state };
    this.props.signup(user, this.props.closeModal);
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

  render() {
    return (
      <div className="signup-form-div" >
        <a href="/auth/google_oauth2/" className="google-link">
          <div className="google-logo"></div>
          <p>Sign up with Google</p>
        </a>
        <div className="separator">
          <div className="separator-line"> </div>
          <p>or</p>
          <div className="separator-line"> </div>
        </div>
        <form className="signup-form-box" onSubmit={this.handleSubmit}>
          { this.renderErrors() }
          <div className="input-item">
            <input type="text"
              value={this.state.fname}
              onChange={this.update("fname")}
              className="signup-input form-input"
              placeholder="First name" />
            <i className="fa fa-user signup-input-icon" aria-hidden="true"></i>
          </div>
          <div className="input-item">
            <input type="text"
              value={this.state.lname}
              onChange={this.update("lname")}
              className="signup-input form-input"
              placeholder="Last name" />
            <i className="fa fa-user signup-input-icon" aria-hidden="true"></i>
          </div>
          <div className="input-item">
            <input type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="signup-input form-input"
              placeholder="Email address" />
            <i className="fa fa-envelope-o signup-input-icon input-email-icon" aria-hidden="true"></i>
          </div>
          <div className="input-item">
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="signup-input form-input"
              placeholder="Password" />
            <i className="fa fa-lock signup-input-icon input-lock-icon" aria-hidden="true"></i>
          </div>
               <input type="submit" value="Sign up" className='user-submit signup-submit'/>
        </form>
      </div>
    );
  }
}

export default SignupForm;
