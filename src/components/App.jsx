import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const contactsLength = contacts.length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <>
        <ContactForm />
        <ToastContainer autoClose={3000} />
      </>
      <h2 className={css.listTitle}>Contacts</h2>
      {contactsLength > 1 && <Filter />}
      {isLoading && !error && (
        <span className={css.load}>Request in progress...</span>
      )}
      {contactsLength > 0 && !error ? (
        <ContactList />
      ) : (
        <p className={css.emptyList}>
          Your phonebook is empty. Please, аdd your first contact.
        </p>
      )}
    </div>
  );
};
