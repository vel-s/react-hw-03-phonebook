import React, {Component} from 'react'
import '../css/App.css';
import ContactList from "./ContactList"
import ContactForm from "./ContactForm"
import Filter from "./Filter"
import propTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  
  
  static propTypes = {
    filter: propTypes.string,
    contacts: propTypes.array
  }
  
  static defaultProps = {
    filter: '',
  }
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  add = (name, number) =>
    this.setState(prevState =>
      ({ contacts: [...prevState.contacts, { id: uuidv4(), name: name, number: number}]}))
  
  remove = contactId =>
    this.setState(prevState =>
      ({contacts: prevState.contacts.filter(({id}) => id !== contactId)}))
  
  filter = (name, value) => this.setState({[name]: value})
  
  getVisibleContacts = () => {
    let {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
  
  render() {
    let {contacts, filter} = this.state
    let visibleContacts = this.getVisibleContacts()
    return (
      <div className={"App"}>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.add}
        />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.filter}
        />
        {visibleContacts.length > 0 ? (
          <ContactList
            contacts={contacts}
            removeContact={this.remove}
            filter={this.state.filter}
          />
        ) : (
          <h3>No contacts</h3>
        )}
      </div>
    );
  }
}

export default App