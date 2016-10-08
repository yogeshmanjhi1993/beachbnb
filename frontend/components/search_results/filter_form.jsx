import React from 'react';
import Rheostat from 'rheostat';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 10,
      max: 1000
    };
    this.updatePriceRange = this.updatePriceRange.bind(this);
    this.updatePriceFilter = this.updatePriceFilter.bind(this);
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
                value="whole"/>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value="private"/>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value="shared"/>
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
