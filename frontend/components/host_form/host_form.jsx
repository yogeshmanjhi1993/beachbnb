import React from 'react';

class HostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        currentUser: this.props.currentUser,
        updateField: this.props.updateField,
        spotFields: this.props.spotFields,
        createSpot: this.props.createSpot,
        errors: this.props.errors,
        receiveErrors: this.props.receiveErrors,
        clearErrors: this.props.clearErrors
      });
    });
  }

  render() {
    return (
      <div>
        { this.renderChildren() }
      </div>
    );
  }
}

export default HostForm;
