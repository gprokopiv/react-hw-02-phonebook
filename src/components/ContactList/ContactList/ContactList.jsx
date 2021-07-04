import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onRemoveContact }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="ContactItem">
          - {name}: {number}
          <button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
// class ContactList extends Component {
//   render() {
//     const contacts = this.props.contacts;
//     const deleteContact = this.props.onDelete;
//     return (
//       <ul className={Style.contacrList}>
//         {contacts.map(({id, name, number}) => (
//           <Contact
//             key={contact.id}
//             id={contact.id}
//             name={contact.name}
//             number={contact.number}
//             onDeleteContact={deleteContact}
//           />
//         ))}
//       </ul>
//     );
//   }
// }
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
// export default ContactList;

// class ContactList extends Component {
//   render() {
//     const contacts = this.props.contacts;

//     return (
//       <ul>
//         {contacts.map(contact => (
//           <Contact
//             key={contact.id}
//             name={contact.name}
//             number={contact.number}
//           />
//         ))}
//       </ul>
//     );
//   }
// }
// function ContactList({ contacts }) {
//   const contacts = this.props.contacts;
//   return (
//     <ul>
//       {contacts.map(contact => (
//         <Contact
//           key={contacts.id}
//           name={contacts.name}
//           number={contacts.number}
//         />
//       ))}
//       {/* {contacts.map(contact => (
//         <Contact
//           key={contact.id}
//           name={contact.name}
//           number={contact.number}
//           onDeleteContact={this.props.onDelete}
//           // {...data}
//         />
//       ))} */}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
