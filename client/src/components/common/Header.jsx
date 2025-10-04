import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hi' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><Link to="/about">{t('about')}</Link></li>
                    <li><Link to="/login">{t('login_signup')}</Link></li>
                    <li><Link to="/contact">{t('contact')}</Link></li>
                </ul>
                <button onClick={toggleLanguage}>
                    {i18n.language === 'en' ? 'हिन्दी' : 'English'}
                </button>
            </nav>
        </header>
    );
};

export default Header;