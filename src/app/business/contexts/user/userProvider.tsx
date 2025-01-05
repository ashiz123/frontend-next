'use client';
import React, { useEffect, useState } from 'react';
import { UserContext } from './userContext';
import { UserDataInterface } from './UserDataInterface';

const UserProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<UserDataInterface | null>(null);

  
  useEffect(() => {
    const storedUser = sessionStorage.getItem('auth_user');
  
    if (storedUser) {
      try {
        // Parse the user data from localStorage and set the state
        const parsedUser = JSON.parse(storedUser);
        console.log(parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data from sessionStorage', error);
        setUser(null); // Reset to null in case of any parsing error
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;