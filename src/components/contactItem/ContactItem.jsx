import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <>
      <span className={css.listText}>{`${contact.name}${': '}`}</span>
      <span className={css.listText}>{contact.number}</span>
      <button
        type="button"
        className={css.listButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
 }