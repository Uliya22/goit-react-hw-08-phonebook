import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HomePage } from 'pages/homePage/HomePage'; 
import { ContactsPage } from 'pages/contactsPage/ContactsPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { RegisterPage } from 'pages/registerPage/RegisterPage';
import { refreshUser } from 'redux/auth/authOperations'; 
import { PrivateRoute } from './PrivateRoute'; 
import { RestrictedRoute } from './RestrictedRoute'; 
import { AppBar } from './appBar/AppBar';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </>
  );
};