import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MarketPlace.css'; // Assuming you have a CSS file for styling

const MarketPlace = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Adjust the endpoint as necessary
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="marketplace">
            <h1>MarketPlace</h1>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product._id} className="product-card">
                            <h2>{product.name}</h2>
                            <p>Price: ₹{product.price}</p>
                            <p>Available Quantity: {product.quantity}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default MarketPlace;