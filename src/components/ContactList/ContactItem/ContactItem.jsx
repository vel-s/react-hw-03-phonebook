import React from "react";
import styles from './Contact.module.css'

let ContactItem = ({id, name, number, removeContact}) => {
  return (
    <li className={styles}>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.tel}>{number}</p>
      </div>
      <button
        type={`button`}
        className={styles.deleteBtn}
        onClick={() => removeContact(id)}
      >
        X
      </button>
    </li>
  );
};

export default ContactItem;
