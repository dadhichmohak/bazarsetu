import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css'; // Assuming you have a CSS file for home page styles

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <h1>{t('welcome_message')}</h1>
            <p>{t('home_description')}</p>
            <div className="navigation-options">
                <button>{t('explore_marketplace')}</button>
                <button>{t('view_farmers_dashboard')}</button>
                <button>{t('login_signup')}</button>
            </div>
        </div>
    );
};

export default Home;