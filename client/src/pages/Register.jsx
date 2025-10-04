import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/api';
import './Register.css'; // Assuming you have a CSS file for styling

const Register = () => {
    const [userType, setUserType] = useState('farmer'); // Default to farmer
    const [formData, setFormData] = useState({
        name: '',
        aadhaar: '',
        contact: '',
        password: '',
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ ...formData, userType });
            history.push('/login'); // Redirect to login after successful registration
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Type:</label>
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="farmer">Farmer</option>
                        <option value="consumer">Consumer</option>
                    </select>
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Aadhaar Number:</label>
                    <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} required />
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;