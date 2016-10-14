import React from 'react';
import { hashHistory } from 'react-router';

class DescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.descriptionSubmit = this.descriptionSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = { imageUrl: null };
  }

  descriptionSubmit(e) {
    e.preventDefault();
    let descriptionSelector = document.getElementById("description-selector");
    let priceSelector = document.getElementById("price-selector");
    this.props.updateField(descriptionSelector.name, descriptionSelector.value);
    this.props.updateField(priceSelector.name, parseInt(priceSelector.value));
    this.props.createSpot();

  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.props.updateField("image", file);
      this.setState({ imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    return (
      <div className="description-form">
        <form className="description-form-half" onSubmit={this.descriptionSubmit}>
          <h3 className="description-form-heading">Tell us about your place!</h3>
          <textarea
            id="description-selector"
            className="description-textarea"
            name="description"
            rows="10"
            cols="50"
            placeholder="description..." />
          <h4>Price</h4>
          <input type="number" name="price" id="price-selector" placeholder="0"/>
          <h4>Image</h4>
          <input type="file" onChange={this.updateFile} />
          <input type="submit" value="Finish" className="description-submit"/>
          <img src={this.state.imageUrl} className="preview-image"/>
        </form>
        <div className="location-form-image">

        </div>
      </div>
    );
  }
}

export default DescriptionForm;
