'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState('fa-user-astronaut');

  useEffect(() => {
    const loggedIn = localStorage.getItem('login') === 'true';
    const savedAvatar = localStorage.getItem('avatar') || 'fas fa-user-astronaut';
    setIsLoggedIn(loggedIn);
    setAvatar(savedAvatar);
  }, []);

  const login = () => {
    localStorage.setItem('login', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem('login', 'false');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phoneNo');
    localStorage.setItem('avatar', 'fas fa-user-astronaut');
    setAvatar('fas fa-user-astronaut');
    setIsLoggedIn(false);
  };

  const updateAvatar = (icon) => {
    localStorage.setItem('avatar', icon);
    setAvatar(icon);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, avatar, login, logout, updateAvatar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
