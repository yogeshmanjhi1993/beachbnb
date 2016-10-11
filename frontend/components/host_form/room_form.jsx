import React from 'react';
import { hashHistory } from 'react-router';

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.roomSubmit = this.roomSubmit.bind(this);
    this.state = {
      beds: 1,
      guests: 1
    };

    this.bedPlus = this.bedPlus.bind(this);
    this.bedMinus = this.bedMinus.bind(this);
    this.guestPlus = this.guestPlus.bind(this);
    this.guestMinus = this.guestMinus.bind(this);
  }

  roomSubmit(e) {
    e.preventDefault();
    // let roomtypeSelector = document.getElementById("roomtype-selector");
    // let guestsSelector = document.getElementById("guests-selector");
    // let locationSelector = document.getElementById("form-search-input");
    // this.props.updateField(roomtypeSelector.name, roomtypeSelector.value);
    // this.props.updateField(guestsSelector.name, parseInt(guestsSelector.value));
    // this.props.updateField(locationSelector.name, locationSelector.value);
    // hashHistory.push("/room");
  }

  bedPlus() {
    this.setState({ beds: this.state.beds + 1 });
  }

  bedMinus() {
    this.setState({ beds: this.state.beds - 1 });
  }

  guestPlus() {
    this.setState({ guests: this.state.guests + 1 });
  }

  guestMinus() {
    this.setState({ guests: this.state.guests - 1 });
  }

  render() {
    let bedText, guestText, bedMinusDisabled, guestMinusDisabled;
    if (this.state.beds === 1) {
      bedText = "bed";
      bedMinusDisabled = true;
    } else {
      bedText = "beds";
      bedMinusDisabled = false;
    }

    if (this.state.guests === 1) {
      guestText = "guest";
      guestMinusDisabled = true;
    } else {
      guestText = "guests";
      guestMinusDisabled = false;
    }

    return (
      <div className="room-form">
        <div className="room-form-half">
          <form className="roomtype-form" onSubmit={this.roomSubmit}>
            <h3>What type of property is this?</h3>
            <select name="kind">
              <option value="apartment">Apartment</option>
              <option value="beach house">Beach House</option>
              <option value="beach bungalow">Beach Bungalow</option>
            </select>
            <h3>How many guests can your place accommodate?</h3>
            <div className="bed-counter">
              <div>{this.state.beds} {bedText}</div>
              <button className="bed-minus" onClick={this.bedMinus} disabled={bedMinusDisabled}>-</button>
              <button className="bed-plus" onClick={this.bedPlus}>+</button>
            </div>
            <div className="guest-counter">
              <div>{this.state.guests} {guestText}</div>
              <button className="guest-minus" onClick={this.guestMinus} disabled={guestMinusDisabled}>-</button>
              <button className="guest-plus" onClick={this.guestPlus}>+</button>
            </div>
            <input type="submit" value="Next" className="room-submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default RoomForm;
