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

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              placeholder="Annie Copeland"
              onChange={this.handleChange}
            />
          </label>

          <label>
            {' '}
            Number{' '}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              placeholder="227-91-26"
              onChange={this.handleChange}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2> Contacts</h2>
        <ul>
          <li key={this.nameInputId}>
            <p>{this.name}</p>
          </li>
          <li>Hermione Kline</li>
          <li>Eden Clements</li>
        </ul>

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
