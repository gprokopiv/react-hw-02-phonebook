import React, { Component } from 'react';
import Container from './components/Container/';
import { v4 as uuidv4 } from 'uuid';

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
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const id = uuidv4();
    const contact = {
      id,
      name,
      number,
    };
  };

  onChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // onDeleteContact = contactItem => {
  //   const { contacts } = this.state;
  //   this.setState(({ contacts }) => ({
  //     contacts: contact.filter(contact => contact.id !== contactItem),
  //   }));
  // };
  render() {
    const { name, number } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="John Smith"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <br></br>
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="111-111-111"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
          <button onSubmit={this.addContact}>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>Find cntacts by name </label>
        <input type="text" value={this.filter} onChange={this.onChange} />
        {/* <ul>
          {this.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}{' '}
              </p>
              <button
                type="button"
                // onClick={() => onDeleteContact(id)}
              >
                {' '}
              </button>
            </li>
          ))}
          <li>Rosie SImpson</li>
          <li>Eden Clements</li>
          <li>Hermione Kline</li>
        </ul> */}
      </Container>
    );
  }
}

export default App;
