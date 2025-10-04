import { useState, useEffect } from 'react';
import { loginUser, registerUser } from '../services/api';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            // Logic to check if user is already logged in
            // This could involve checking local storage or making an API call
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        };
        checkUser();
    }, []);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const loggedInUser = await loginUser(credentials);
            setUser(loggedInUser);
            localStorage.setItem('user', JSON.stringify(loggedInUser));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            const newUser = await registerUser(userData);
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return { user, loading, error, login, register, logout };
};

export default useAuth;