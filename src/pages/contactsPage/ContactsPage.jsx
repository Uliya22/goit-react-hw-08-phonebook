import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactForm } from 'components/contactForm/ContactForm';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.listTitle}>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {isLoading && !error && (
        <span className={css.load}>Request in progress...</span>
      )}
      {contacts.length > 0 && !error ? (
        <ContactList />
      ) : (
        <p className={css.blankSheet}>
          Your phonebook is empty. Please add your first contact.
        </p>
      )}
    </div>
  );
};