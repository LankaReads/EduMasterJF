// src/contexts/auth-context.jsx
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create AuthContext
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [signInFormData, setSignInFormData] = useState({ userEmail: '', password: '' });
    const [signUpFormData, setSignUpFormData] = useState({ userName: '', userEmail: '', password: '' });
    const navigate = useNavigate();

    async function handleLoginUser(event) {
        // event.preventDefault();
        // Logic to handle login (e.g., API call)
        try {
            console.log('Logging in user', signInFormData);
            // Navigate to respective portal upon success based on role
            const role = 'student'; // Example role
            if (role === 'student') {
                navigate('/studentdashboard');
            } else if (role === 'instructor') {
                navigate('/teacherdashboard');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    async function handleRegisterUser(role) {
      try {
        const response = await fetch(`http://localhost:5000/auth/${role}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signUpFormData),
        });
    
        if (!response.ok) {
          throw new Error('Registration failed');
        }
    
        const data = await response.json();
        console.log('Registration successful:', data.message);
        alert('Registration successfully, Please sign in to continue.');
        setSignUpFormData({ userName: '', userEmail: '', password: '' });
    
        // Redirect based on role to the appropriate sign-in page
        navigate(role === 'teacher' ? '/teacherPortal' : '/studentPortal');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }

    return (
        <AuthContext.Provider value={{
            signInFormData,
            setSignInFormData,
            signUpFormData,
            setSignUpFormData,
            handleLoginUser,
            handleRegisterUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
}
