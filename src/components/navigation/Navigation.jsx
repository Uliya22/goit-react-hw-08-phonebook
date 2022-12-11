import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth'; 
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={css.link}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'white' : 'rgb(177, 206, 239)',
        })}
      >
        Phonebook
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? 'white' : 'rgb(177, 206, 239)',
          })}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
