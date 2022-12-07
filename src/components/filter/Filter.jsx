import { useDispatch, useSelector } from 'react-redux';
import { selectValueFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectValueFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
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