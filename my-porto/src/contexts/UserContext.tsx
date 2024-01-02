// UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserContextProps {
  userName: string;
  updateUser: (name: string) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    try {
      localStorage.setItem('userName', userName);
    } catch (error) {
      console.error('Error storing userName in localStorage:', error);
    }
  }, [userName]);

  const updateUser = (name: string) => setUserName(name);

  return (
    <UserContext.Provider value={{ userName, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};