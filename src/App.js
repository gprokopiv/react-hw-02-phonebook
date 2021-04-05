import React, { Component } from 'react';
import Container from './components/Container/';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleSubmit = e => {
    const { name, value } = e.currentTarget;
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  handleChange;
  render() {
    const { name, number } = this.state;
    return (
      <>
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
        </form>

        <br></br>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
        <button>Add contact</button>
        <h2>Contacts</h2>
        <ul>
          <li>Rosie SImpson</li>
          <li>Eden Clements</li>
          <li>Hermione Kline</li>
        </ul>
      </>
    );
  }
}

export default App;
