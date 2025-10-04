export const API_BASE_URL = 'http://localhost:5000/api';

export const ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    PRODUCTS: `${API_BASE_URL}/products`,
    ORDERS: `${API_BASE_URL}/orders`,
};

export const DEFAULTS = {
    PAGE_SIZE: 10,
    CURRENCY: 'INR',
};

export const LANGUAGES = {
    EN: 'en',
    HI: 'hi',
};