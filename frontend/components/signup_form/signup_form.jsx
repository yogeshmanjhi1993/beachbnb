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
			<ul>
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
      <div className="signin-form-div" onSubmit={this.handleSubmit}>
        <form className="signin-form-box">
          { this.renderErrors() }
          <div className="signin-form">
            <input type="text"
                   value={this.state.fname}
                   onChange={this.update("fname")}
                   className="signin-input"
                   placeholder="First name" />

            <br />
            <input type="text"
                   value={this.state.lname}
                   onChange={this.update("lname")}
                   className="signin-input"
                   placeholder="Last name" />

            <br />
            <input type="text"
                   value={this.state.email}
                   onChange={this.update("email")}
                   className="signin-input"
                   placeholder="Email address" />

            <br />
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")}
                   className="signin-input"
                   placeholder="Password" />
            <br />
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
