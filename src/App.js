import React, { Component } from 'react';
import Container from './components/Container/';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList/';
import { v4 as uuidv4 } from 'uuid';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const { contacts } = this.state;
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase());
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2> Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {/* <ContactList
          contacts={this.getVisibleContacts}
          onDeleteContact={this.deleteContact}
        /> */}
        {/* <ul>
          <li key={this.nameInputId}>
            <p>{this.name}</p>
          </li>
          <li>Hermione Kline</li>
          <li>Eden Clements</li>
        </ul> */}

        {/* <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} /> */}

        {/* <h2>Contacts</h2> */}
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
        <SignUpForm />
      </Container>
    );
  }
}

export default App;
