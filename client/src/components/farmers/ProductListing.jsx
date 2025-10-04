import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddProduct = () => {
        // Logic to add a new product
    };

    return (
        <div className="product-listing">
            <h2>Available Crops</h2>
            <button onClick={handleAddProduct}>Add New Crop</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListing;