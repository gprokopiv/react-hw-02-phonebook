import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

// class ContactList extends Component {
//   render() {
//     const contacts = this.props.contacts;
//     return (
//       <ul>
//          {contacts.map(contact => (
//         <Contact
//         key={contact.id}
//         name={contact.name}
//         number={contact.number}
//         onDeleteContact={this.props.onDelete}
//           // {...data}
//         />
//       ))}

//       </ul>
//     );
//   }
// }
function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          // onDeleteContact={this.props.onDelete}
          // {...data}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
