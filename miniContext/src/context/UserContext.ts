import React from 'react';

export interface User {
    userName: string;
}

interface UserContextType{
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;