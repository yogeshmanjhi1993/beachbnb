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
    const priceRange = {
      min: e.values[0],
      max: e.values[1]
    };
    this.props.updateFilter("priceRange", priceRange);
  }

  render() {
    let minPrice = `$${this.state.min}`;
    let maxPrice = (this.state.max === 1000) ? "$1,000+" : `$${this.state.max}`;
    return (
      <div className="filter-form">
        <div className="price-slider">
          <p>Price Range</p>
          <Rheostat
            className="form-slider"
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
