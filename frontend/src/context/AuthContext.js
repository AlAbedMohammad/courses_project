import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('http://localhost:5000/api/auth/me').then(response => {
                setUser(response.data);
            }).catch(() => {
                localStorage.removeItem('token');
                delete axios.defaults.headers.common['Authorization'];
            });
        }
    }, []);

    const login = async (email, password) => {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        localStorage.setItem('token', response.data.token);
        console.log(response.data.payload.user);
      
        setUser(response.data);
    };

    const register = async (name, email, password, role) => {
        const response = await axios.post('http://localhost:5000/api/register', { name, email, password, role });
        localStorage.setItem('token', response.data.token);
     
        setUser(response.data);
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
