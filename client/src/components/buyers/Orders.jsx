import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../../services/api';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await fetchOrders();
                setOrders(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="orders-container">
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <h3>Order ID: {order.id}</h3>
                            <p>Status: {order.status}</p>
                            <p>Total: ₹{order.total}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Orders;