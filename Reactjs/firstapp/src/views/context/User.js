import axios from 'axios';
import React, { Component, createContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            let resp = await axios.get('https://jsonplaceholder.typicode.com/users/2');
            setUser(resp.data);
            setLoading(false);
        } catch (e) {
            setLoading(true);
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };