import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCrops, fetchSalesData } from '../../services/api';
import './Dashboard.css';

const Dashboard = () => {
    const [crops, setCrops] = useState([]);
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const cropsData = await fetchCrops();
            const salesData = await fetchSalesData();
            setCrops(cropsData);
            setSalesData(salesData);
        };
        loadData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Farmer's Dashboard</h1>
            <section className="crops-section">
                <h2>Your Crops</h2>
                <ul>
                    {crops.map(crop => (
                        <li key={crop.id}>{crop.name} - {crop.quantity} kg</li>
                    ))}
                </ul>
            </section>
            <section className="sales-section">
                <h2>Sales Data</h2>
                <ul>
                    {salesData.map(sale => (
                        <li key={sale.id}>Sold {sale.quantity} kg of {sale.cropName} for ₹{sale.amount}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;