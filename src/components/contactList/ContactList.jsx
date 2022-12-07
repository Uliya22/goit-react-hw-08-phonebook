import { useSelector } from 'react-redux';
import { ContactItem } from '../contactItem/ContactItem';
import { selectContacts, selectValueFilter } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const getVisibleContacts = () => {
    const normalizedFilter = FilterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
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