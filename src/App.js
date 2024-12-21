// import logo from './logo.svg';
// import './App.css';
import Landing from '../src/components/landing/landing.js';
import Navbar from './components/navbar/navbar.js';
import About from './components/about/about.js';
import Experience from './components/experience/experience.js';
import Portfolio from './components/portfolio/portfolio.js';
import Contact  from './components/contact_me/contact.js';

function App() {
    return (
        <>
            <Navbar />
            <About />
            <Landing />
            <Experience />
            <Portfolio />
            <Contact />
        </>
    );
}

export default App;
