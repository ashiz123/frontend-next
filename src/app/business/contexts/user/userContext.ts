// UserContext.tsx
import React, { createContext, useContext } from 'react';
import { UserDataInterface } from './UserDataInterface';


// Define the shape of the context value
interface UserContextValue {
    user: UserDataInterface | null ;
    setUser: React.Dispatch<React.SetStateAction<UserDataInterface | null>>;
}

// Create the UserContext with a default value of `undefined`
export const UserContext = createContext<UserContextValue | undefined>(undefined);

// Create a custom hook for accessing the context
export const useUserContext = ():UserContextValue => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};