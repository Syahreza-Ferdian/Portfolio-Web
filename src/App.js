import React, { useState, useEffect } from "react";
import Landing from "./components/landing/landing.js";
import Navbar from "./components/navbar/navbar.js";
import About from "./components/about/about.js";
import Experience from "./components/experience/experience.js";
import Portfolio from "./components/portfolio/portfolio.js";
import Contact from "./components/contact_me/contact.js";
import { InfinitySpin } from "react-loader-spinner";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
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
                    <Helmet>
                        <meta
                            name="description"
                            content="Syahreza Fisti Ferdian - Full Stack Web Developer, Backend Developer, Tech Enthusiast, and Software Engineer. See my portfolio and projects here."
                        />
                        <link rel="canonical" href="https://syahreza.site" />
                        <meta
                            name="keywords"
                            content="Syahreza Fisti Ferdian, portfolio, web developer, software engineer, full stack developer, golang, javascript, php, laravel, react, typescript, syahreza, syahreza fisti ferdian"
                        />
                        <meta name="author" content="Syahreza Fisti Ferdian" />
                        <meta
                            property="og:title"
                            content="My Portfolio | Syahreza"
                        />
                        <meta
                            property="og:description"
                            content="Cek pengalaman kerja saya, proyek yang sudah saya kerjakan, dan juga cara untuk menghubungi saya."
                        />
                        <meta
                            property="og:image"
                            content="https://syahreza.site/static/media/IMG_4473.0561a367716440ef88bb.jpg"
                        />
                        <meta
                            property="og:url"
                            content="https://syahreza.site"
                        />
                        <meta property="og:type" content="website" />

                        <script type="application/ld+json">
                            {`
                                {
                                    "@context": "https://schema.org",
                                    "@type": "Person",
                                    "name": "Syahreza Fisti Ferdian",
                                    "url": "https://syahreza.site",
                                    "image": "https://syahreza.site/static/media/IMG_4473.0561a367716440ef88bb.jpg",
                                    "jobTitle": "Full Stack Developer",
                                    "worksFor": {
                                        "@type": "Organization",
                                        "name": "Freelance"
                                    },
                                    "sameAs": [
                                        "https://github.com/Syahreza-Ferdian",
                                        "https://gitlab.com/syahrezaferdian",
                                        "https://www.linkedin.com/in/syahreza-ferdian-b43647287/",
                                    ],
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Malang",
                                        "addressCountry": "Indonesia"
                                    },
                                    "contactPoint": {
                                        "@type": "ContactPoint",
                                        "telephone": "+62 895-4149-49161",
                                        "contactType": "Personal Contact"
                                    }
                                }
                            `}
                        </script>
                    </Helmet>

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
