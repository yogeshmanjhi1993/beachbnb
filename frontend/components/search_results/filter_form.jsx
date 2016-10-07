import React from 'react';
import Rheostat from 'rheostat';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 1000
    };
  }

  updateDisplay(e) {
    
  }

  render() {
    return (
      <div className="filter-form">
        <div className="price-slider">
          <p>Price Range</p>
          <Rheostat
            className="form-slider"
            min={10}
            max={1000}
            values={[1, 1000]}
            onValuesUpdated={this.updateDisplay}
            />
        </div>
      </div>
    );
  }
}

export default FilterForm;
