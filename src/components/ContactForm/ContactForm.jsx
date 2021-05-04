import React, {Component} from 'react'
import styles from "./ContactForm.module.css";
import propTypes from 'prop-types'


class ContactForm extends Component {
  
  state = {
      name: '',
      number: '',
    }
  
  static propTypes = {
    name: propTypes.string,
    number: propTypes.number
  }
  static defaultProps = {}
  
  handleSubmit = (event) => {
    event.preventDefault();
    let { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };
  
  handleChange = event => {
    let {name, value} = event.target
    this.setState({[name]: value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input
              id={`name`}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              placeholder={`Name`}
              onChange={this.handleChange}
            />
            <input
              type="tel"
              id={`tel`}
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              value={this.state.number}
              required
              onChange={this.handleChange}
              placeholder={`Phone`}
            />
            <br/>
          <button className={styles.addBtn}>Add</button>
        </form>
      </div>
    )
  }
}

export default ContactForm