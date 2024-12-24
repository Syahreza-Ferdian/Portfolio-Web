import React, { useState, useEffect } from 'react';
import Landing from './components/landing/landing.js';
import Navbar from './components/navbar/navbar.js';
import About from './components/about/about.js';
import Experience from './components/experience/experience.js';
import Portfolio from './components/portfolio/portfolio.js';
import Contact from './components/contact_me/contact.js';
import { InfinitySpin } from 'react-loader-spinner';
import './App.css'; 

function App() {
    const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
    const [pageReady, setPageReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimeElapsed(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const checkPageReady = () => {
            if (document.readyState === 'complete') {
                setPageReady(true);
            }
        };

        window.addEventListener('load', checkPageReady);

        return () => window.removeEventListener('load', checkPageReady);
    }, []);

    const showLoader = !minimumTimeElapsed || !pageReady;

    return (
        <>
            {showLoader ? (
                <div className="loader-container">
                    <InfinitySpin
                        visible={true}
                        width="200"
                        color="#4fa94d"
                        ariaLabel="infinity-spin-loading"
                    />
                </div>
            ) : (
                <div className="main-content">
                    <Navbar />
                    <About />
                    <Landing />
                    <Experience />
                    <Portfolio />
                    <Contact />
                </div>
            )}
        </>
    );
}

export default App;
