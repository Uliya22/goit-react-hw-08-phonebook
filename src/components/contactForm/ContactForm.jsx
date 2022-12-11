import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (checkName(name)) {
      Notify.info(`'${name}' is already in contacts`, {
        width: '380px',
        position: 'center-top',
        borderRadius: '5px',
        clickToClose: true,
        timeout: 3000,
        fontSize: '20px',
        backgroundColor: '#b1ceef',
        showOnlyTheLastOne: true,
      });
    }
    else if (checkNumber(number)) {
      Notify.info(`${number} is already in your contacts!`, {
        width: '380px',
        position: 'center-top',
        borderRadius: '5px',
        clickToClose: true,
        timeout: 3000,
        fontSize: '20px',
        background: '#b1ceef',
        showOnlyTheLastOne: true,
      });
    }
    else {
      dispatch(addContact({ name, number }));
    }

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.formContainer} onSubmit={handleSubmitForm}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="Submit" className={css.inputButton}>
          Add contact
        </button>
      </form>
    </div>
  );
};