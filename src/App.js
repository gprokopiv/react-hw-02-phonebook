import React, { Component } from 'react';
import Container from './components/Container/';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList/';
import { v4 as uuidv4 } from 'uuid';
import SignUpForm from './components/SignUpForm';
import Data from './data/conacts.json';


class App extends Component {
  state = {
    contacts: Data,
    filter: '',
    name: '',
    number: '',
  };
  addContact = data => {
    const { contacts } = this.state;
    
    const contactIsValid = this.validateContact(data, contacts);

    if(contactIsValid) {
      data.id = uuidv4();
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      })
      );
    }
  };

  validateContact =(data, contacts) => {
    if (contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return false;
    } else return true;
  }



  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase());
  };
  deleteContact = contactNew => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactNew),
    }));
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
          contacts={this.getVisibleContacts} */}
        {/* // onDeleteContact={this.deleteContact}
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
