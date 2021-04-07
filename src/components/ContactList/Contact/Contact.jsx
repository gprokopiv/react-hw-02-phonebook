import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    id: this.props.id,
  };

  render() {
    const { id, name, number, onDeleteContact } = this.props;

    return (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(this.state.id)}> Delete</button>
      </li>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
