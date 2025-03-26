import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const { data } = await auth.getUser();
          setUser(data);
        } catch (error) {
          logout();
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    const { data } = await auth.login({ email, password });
    localStorage.setItem('authToken', data.token);
    const { data: userData } = await auth.getUser();
    setUser(userData);
  };

  const logout = async () => {
    try {
      await auth.logout();
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
    }
  };

  return (
      <AuthContext.Provider value={{ user, login, logout, loading }}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
