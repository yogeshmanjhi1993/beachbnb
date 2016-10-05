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
      <div className="signup-form-div" onSubmit={this.handleSubmit}>
        <form className="signup-form-box">
          { this.renderErrors() }
          <input type="text"
                 value={this.state.fname}
                 onChange={this.update("fname")}
                 className="signup-input form-input"
                 placeholder="First name" />

          <input type="text"
                 value={this.state.lname}
                 onChange={this.update("lname")}
                 className="signup-input form-input"
                 placeholder="Last name" />

          <input type="text"
                 value={this.state.email}
                 onChange={this.update("email")}
                 className="signup-input form-input"
                 placeholder="Email address" />

          <input type="password"
                 value={this.state.password}
                 onChange={this.update("password")}
                 className="signup-input form-input"
                 placeholder="Password" />
               <input type="submit" value="Sign up" className='user-submit signup-submit'/>
        </form>
      </div>
    );
  }
}

export default SignupForm;
