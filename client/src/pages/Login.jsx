import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {
    const [aadhaar, setAadhaar] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(aadhaar, password);
            history.push('/'); // Redirect to home after successful login
        } catch (err) {
            setError('Login failed. Please check your Aadhaar number and password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="aadhaar">Aadhaar Number</label>
                    <input
                        type="text"
                        id="aadhaar"
                        value={aadhaar}
                        onChange={(e) => setAadhaar(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;