import { Component } from 'react';
import { FormAddContacts } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import swal from 'sweetalert';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleAddContact = (e, callback) => {
    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    const isContact = this.state.contacts.some(
      obj => obj.name === newContact.name
    );
    if (isContact) {
      swal({
        title: newContact.name,
        text: 'Is already in contacts!',
        icon: 'info',
      });
      callback();
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    callback();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleDeleteContact = e => {
    const idBtn = e.target.id;
    const newContacts = this.state.contacts.filter(({ id }) => id !== idBtn);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <div className="maine_box ">
        <h1 className="h1 mt-2">Phonebook</h1>
        <FormAddContacts handleAddContact={this.handleAddContact} />
        <h2 className="h2 mt-3">Contacts</h2>
        <Filter state={this.state} handleChange={this.handleChange} />
        <ContactsList
          array={this.state.contacts}
          filter={this.state.filter}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
