import React, { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    email: '';
    inputValue: '',
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
  }
  render() {
    const { email} = this.state;
    return (
      <div>
        <form onSubmit= {this.onSubmit}>
        <label htmlFor="email">  Email </label><input
          type="email"
          value={email}
          onChange={this.handleEmailChange} id='email'
        ></input>
        <button type='submit' > Sigh up </button>
          </form>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        >
          {' '}
        </input> */}
      </div>
    );
  }
}
