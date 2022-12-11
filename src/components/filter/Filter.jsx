import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectValueFilter } from 'redux/contacts/contactsSelectors'; 
import { setFilter } from 'redux/filterSlice'; 
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectValueFilter);

  const onChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        className={css.input}
        onChange={onChange}
      />
    </label>
  );
};