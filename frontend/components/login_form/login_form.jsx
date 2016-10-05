import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="login-form-div" onSubmit={this.handleSubmit}>
        { this.renderErrors() }
        <form className="login-form-box">
          <input type="text"
                 value={this.state.email}
                 onChange={this.update("email")}
                 className="login-input form-input"
                 placeholder="Email address" />

          <input type="password"
                 value={this.state.password}
                 onChange={this.update("password")}
                 className="login-input form-input"
                 placeholder="Password" />
          <input type="submit" value="Log in" className="user-submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
