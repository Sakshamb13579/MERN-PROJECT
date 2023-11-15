import React from 'react';
import Header from './Header';
import Footer from './Footer';

function LoginPage() {
    const headerLinks = [
        { url: '/', text: 'Home' },
        { url: '/login', text: 'Login' },
        { url: '/about', text: 'About' },
        { url: '/contact', text: 'Contact' }
    ];

    return (
        <div className="login-page">

            <Header links={headerLinks} />

            <h1>Login Page</h1>

            <Footer />
        </div>
    );
}

export default LoginPage;