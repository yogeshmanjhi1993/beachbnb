import React from 'react';
import { hashHistory } from 'react-router';

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.roomSubmit = this.roomSubmit.bind(this);
  }

  roomSubmit() {
    e.preventDefault();
    let roomtypeSelector = document.getElementById("roomtype-selector");
    let guestsSelector = document.getElementById("guests-selector");
    let locationSelector = document.getElementById("form-search-input");
    this.props.updateField(roomtypeSelector.name, roomtypeSelector.value);
    this.props.updateField(guestsSelector.name, parseInt(guestsSelector.value));
    this.props.updateField(locationSelector.name, locationSelector.value);
    hashHistory.push("/room");
  }

  render() {
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
            <input type="submit" value="Next" className="room-submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default RoomForm;
