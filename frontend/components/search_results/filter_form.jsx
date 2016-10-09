import React from 'react';
import Rheostat from 'rheostat';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 10,
      max: 1000,
      wholeCheck: false,
      privateCheck: false,
      sharedCheck: false
    };
    this.updatePriceRange = this.updatePriceRange.bind(this);
    this.updatePriceFilter = this.updatePriceFilter.bind(this);
    this.updateRoomtype = this.updateRoomtype.bind(this);
    this.updateRoomFilter = this.updateRoomFilter.bind(this);
  }

  updatePriceRange(e) {
    this.setState({ min: e.values[0], max: e.values[1] });
  }

  updatePriceFilter(e) {
    let maxPrice;
    if (e.values[1] === 1000) {
      maxPrice = 100000000;
    } else {
      maxPrice = e.values[1];
    }
    const priceRange = {
      min: e.values[0],
      max: maxPrice
    };
    this.props.updateFilter("priceRange", priceRange);
  }

  updateRoomtype(e) {
    if (e.target.value === "shared") {
      this.setState(
        { sharedCheck: !this.state.sharedCheck },
        this.updateRoomFilter
      );
    } else if (e.target.value === "whole") {
      this.setState(
        { wholeCheck: !this.state.wholeCheck },
        this.updateRoomFilter
      );
    } else {
      this.setState(
        { privateCheck: !this.state.privateCheck },
        this.updateRoomFilter
      );
    }
  }

  updateRoomFilter () {

    let roomtypes = [];
    if (this.state.sharedCheck) {
      roomtypes.push("shared");
    }
    if (this.state.wholeCheck) {
      roomtypes.push("whole");
    }
    if (this.state.privateCheck) {
      roomtypes.push("private");
    }
    if (roomtypes.length === 0) {
      roomtypes = ["shared", "whole", "private"];
    }
    this.props.updateFilter("roomtype", roomtypes);
    roomtypes = [];
  }


  render() {
    let minPrice = `$${this.state.min}`;
    let maxPrice = (this.state.max === 1000) ? "$1,000+" : `$${this.state.max}`;
    return (
      <div className="filter-form">
        <div className="roomtype-selector filter-form-input">
          <p>Room type</p>
          <div className="input-els checkboxes">
            <div className="checkbox">
              <input
                type="checkbox"
                value="whole"
                checked={this.state.wholeCheck}
                onChange={this.updateRoomtype}/>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value="private"
                checked={this.state.privateCheck}
                onChange={this.updateRoomtype}/>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value="shared"
                checked={this.state.sharedCheck}
                onChange={this.updateRoomtype}/>
            </div>
          </div>
        </div>
        <div className="price-slider filter-form-input">
          <p>Price Range</p>
          <Rheostat
            className="form-slider input-els"
            min={10}
            max={1000}
            values={[this.state.min, this.state.max]}
            onValuesUpdated={this.updatePriceRange}
            onChange={this.updatePriceFilter}
            >
            <div className="min-price">{minPrice}</div>
            <div className="max-price">{maxPrice}</div>
          </Rheostat>
        </div>
      </div>
    );
  }
}

export default FilterForm;
