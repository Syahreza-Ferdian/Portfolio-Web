import React from "react";
import '../navbar/navbar.css';

function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Syahreza</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <button className="nav-link" id="#about" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-about" aria-controls="offcanvasBottom">About</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="#experience" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-experience" aria-controls="offcanvasBottom">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-portfolio" aria-controls="offcanvasBottom">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-contact" aria-controls="offcanvasBottom">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;