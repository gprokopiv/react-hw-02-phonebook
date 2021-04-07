import React, { Component } from 'react';
import Container from './components/Container/';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList/';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.setState({ name: '', number: '' });
  // };
  // handleChange = e => {
  //   const { name, value } = e.currentTarget;

  //   this.setState({ [name]: value });
  // };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };
  onChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.filter(contact => contact.id !== contactId),
    }));
  };

  visibleContacts = () => {
    return this.contact.name.toLowerCase().inclused(this.filter.toLowerCase());
  };
  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* {contacts.length > 1 && (
          <Filter value={this.filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={this.visibleContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          <p>Your phonebook is empty</p>
        )} */}
      </Container>
    );
  }
}

export default App;
