import React from 'react';
import { hashHistory } from 'react-router';

class WelcomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.welcomeSubmit = this.welcomeSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  welcomeSubmit(e) {
    e.preventDefault();
    let roomtypeSelector = document.getElementById("roomtype-selector");
    let guestsSelector = document.getElementById("guests-selector");
    let nameSelector = document.getElementById("name-input");
    if (nameSelector.value) {
      this.props.updateField(roomtypeSelector.name, roomtypeSelector.value);
      this.props.updateField(guestsSelector.name, parseInt(guestsSelector.value));
      this.props.updateField(nameSelector.name, nameSelector.value);
      this.props.updateField("host_id", this.props.currentUser.id);
      this.props.clearErrors();
      hashHistory.push("/room");
    } else {
      this.props.receiveErrors(["You must name your spot to continue"]);
    }
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
      <div className="host-form">
        <div className="host-form-half">
          <h2 className="host-form-first-heading">
            Hi {this.props.currentUser.fname}! Let's get you ready to become a host.
          </h2>
          <p className="step-subheading">STEP 1</p>
          <p className="kind-subheading">What kind of place do you have?</p>
          { this.renderErrors() }
          <form onSubmit={this.welcomeSubmit} className="welcome-form">
            <select name="roomtype" className="spot-form-input form-dropdown" id="roomtype-selector">
              <option value="whole">Entire home/apt</option>
              <option value="private">Private room</option>
              <option value="shared">Shared room</option>
            </select>
            <select name="guests" className="spot-form-input form-dropdown" id="guests-selector">
              <option value={1}>for 1 guest</option>
              <option value={2}>for 2 guests</option>
              <option value={3}>for 3 guests</option>
              <option value={4}>for 4 guests</option>
              <option value={5}>for 5 guests</option>
              <option value={6}>for 6 guests</option>
              <option value={7}>for 7 guests</option>
              <option value={8}>for 8 guests</option>
              <option value={9}>for 9 guests</option>
              <option value={10}>for 10 guests</option>
              <option value={11}>for 11 guests</option>
              <option value={12}>for 12 guests</option>
              <option value={13}>for 13 guests</option>
              <option value={14}>for 14 guests</option>
              <option value={15}>for 15 guests</option>
              <option value={16}>for 16 guests</option>
            </select>
            <br />
            <input
              type="text"
              name="name"
              className="form-search spot-form-input"
              id="name-input"
              placeholder="e.g. Cool Beach House" />
            <input type="submit" value="Continue" className="welcome-submit" />
          </form>
        </div>
        <div className="host-form-image">

        </div>
      </div>
    );
  }
}

export default WelcomeForm;
