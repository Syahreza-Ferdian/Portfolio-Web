import React, { useState, useEffect } from "react";
import Landing from "./components/landing/landing.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";
import Experience from "./components/experience/experience.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Contact from "./components/contact_me/contact.jsx";
import { InfinitySpin } from "react-loader-spinner";
import "./App.css";

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
