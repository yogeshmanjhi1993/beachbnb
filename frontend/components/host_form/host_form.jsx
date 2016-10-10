import React from 'react';

class HostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        currentUser: this.props.currentUser
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
