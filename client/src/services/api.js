import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your server URL

// User Authentication
export const registerUser = async (userData) => {
    return await axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
    return await axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

// Product Management
export const fetchProducts = async () => {
    return await axios.get(`${API_BASE_URL}/products`);
};

export const addProduct = async (productData) => {
    return await axios.post(`${API_BASE_URL}/products`, productData);
};

// Order Processing
export const fetchOrders = async (userId) => {
    return await axios.get(`${API_BASE_URL}/orders/${userId}`);
};

export const createOrder = async (orderData) => {
    return await axios.post(`${API_BASE_URL}/orders`, orderData);
};