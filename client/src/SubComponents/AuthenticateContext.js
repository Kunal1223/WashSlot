import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [namechar, setNamechar] = useState(null);

  useEffect(() => {
    const storedNamechar = localStorage.getItem('namechar');
    if (storedNamechar) {
      setNamechar(storedNamechar);
    }
  }, []);

  const setAuthenticatedUser = (user) => {
    setNamechar(user);
    localStorage.setItem('namechar', user);
  };

  return (
    <AuthContext.Provider value={{ namechar, setAuthenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
}; 

export const useAuth = () => {
  return useContext(AuthContext);
};
