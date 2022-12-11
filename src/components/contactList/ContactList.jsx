import { useSelector } from 'react-redux';
import { ContactItem } from 'components/contactItem/ContactItem'; 
import { selectContacts, selectValueFilter } from 'redux/contacts/contactsSelectors'; 
import css from './ContactList.module.css';

export const ContactList = () => {
  const getVisibleContacts = () => {
    const normalizedFilter = FilterValue;
    return contacts.filter(contact => contact.name.includes(normalizedFilter));
  };

  const contacts = useSelector(selectContacts);
  
  const FilterValue = useSelector(selectValueFilter);
  
  const visibleContacts = getVisibleContacts();
  
  return (
    <>
      <div className={css.listContainer}>
        <ul className={css.phoneList}>
          {visibleContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};