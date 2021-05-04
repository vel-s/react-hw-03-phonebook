import React from "react";
import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem"


let ContactList = ({contacts, removeContact, filter}) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({id, name, number}) =>
        (
          name.toLowerCase().includes(filter.toLowerCase()) &&
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            removeContact={removeContact}
          />
        )
      )}
    </ul>
  )
};

export default ContactList;
