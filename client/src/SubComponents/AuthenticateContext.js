import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [namechar, setNamechar] = useState(null);
  const [Uemail , setUseremail] = useState(null);

  useEffect(() => {
    const storedNamechar = localStorage.getItem('namechar');
    const storeEmail = localStorage.getItem('Uemail');

    if (storedNamechar) {
      setNamechar(storedNamechar);
    } 

    if(storeEmail){
      setUseremail(storeEmail);
    }
  }, []);

  const setAuthenticatedUser = (user) => {
    setNamechar(user);
    localStorage.setItem('namechar', user);
  };

  const setAuthenticatEmail = (user) =>{
    setUseremail(user);
    localStorage.setItem('Uemail', user);
  }

  return (
    <AuthContext.Provider value={{ namechar,Uemail, setAuthenticatEmail, setAuthenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
}; 

export const useAuth = () => {
  return useContext(AuthContext);
};
