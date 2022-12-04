import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const contactsLength = contacts.length;
  
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contactsLength > 1 && <Filter />}
      {contactsLength > 0 && <ContactList />}
    </div>
  );
};