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
    let kindSelector = document.getElementById("kind-selector");
    this.props.updateField(kindSelector.name, kindSelector.value);
    this.props.updateField("beds", this.state.beds);
    this.props.updateField("guests", this.state.guests);
    hashHistory.push("/location");
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
            <select name="kind" id="kind-selector">
              <option value="apartment">Apartment</option>
              <option value="beach house">Beach House</option>
              <option value="beach bungalow">Beach Bungalow</option>
            </select>
            <h3>How many guests can your place accommodate?</h3>
            <div className="bed-counter counter">
              <div className="label-text">{this.state.beds} {bedText}</div>
              <div className="count-buttons">
                <button type="button" className="bed-minus count-button" onClick={this.bedMinus} disabled={bedMinusDisabled}>-</button>
                <button type="button" className="bed-plus count-button" onClick={this.bedPlus}>+</button>
              </div>
            </div>
            <div className="guest-counter counter">
              <div className="label-text">{this.state.guests} {guestText}</div>
              <div className="count-buttons">
                <button type="button" className="guest-minus count-button" onClick={this.guestMinus} disabled={guestMinusDisabled}>-</button>
                <button type="button" className="guest-plus count-button" onClick={this.guestPlus}>+</button>
              </div>
            </div>
            <input type="submit" value="Next" className="room-submit" />
          </form>
        </div>
        <div className="room-form-image">

        </div>
      </div>
    );
  }
}

export default RoomForm;
