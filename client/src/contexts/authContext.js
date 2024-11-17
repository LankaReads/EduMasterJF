import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signInFormData, setSignInFormData] = useState({ userEmail: '', password: '' });
  const [signUpFormData, setSignUpFormData] = useState({ userName: '', userEmail: '', password: '' });
  const [currentUser, setCurrentUser] = useState(null); // State for storing the current user's info
  const [authError, setAuthError] = useState(null); // Optional: state for error handling

  const handleRegisterUser = async () => {
    try {
      const res = await axios.post('/api/auth/student/signup', signUpFormData);
      console.log('User registered:', res.data);
      setCurrentUser(res.data.user); // Assuming the API returns the user data upon successful registration
    } catch (error) {
      console.error('Error signing up:', error);
      setAuthError(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  const handleLoginUser = async () => {
    try {
      const res = await axios.post('/api/auth/student/login', signInFormData);
      console.log('User logged in:', res.data);
      setCurrentUser(res.data.user); // Assuming the API returns the logged-in user's data
      setAuthError(null); // Clear any previous error on success
    } catch (error) {
      console.error('Error signing in:', error);
      setAuthError(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  const handleLogoutUser = () => {
    setCurrentUser(null); // Clear current user on logout
    setSignInFormData({ userEmail: '', password: '' }); // Clear form data after logout
  };

  return (
    <AuthContext.Provider value={{
      signInFormData,
      setSignInFormData,
      signUpFormData,
      setSignUpFormData,
      currentUser, // Expose currentUser to access throughout the app
      authError, // Expose error state
      handleRegisterUser,
      handleLoginUser,
      handleLogoutUser, // Add logout handler to context
    }}>
      {children}
    </AuthContext.Provider>
  );
};
