import React, { useState, useEffect } from "react";
import './portfolio.css';
import portfolioIlustration from '../../assets/undraw_programming_65t2.svg';
import projectsData from './projects.json';

function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <>
            <div className="offcanvas offcanvas-bottom vh-100" tabIndex="-1" id="offcanvas-portfolio" aria-labelledby="offcanvasPortfolioLabel">
                <div className="offcanvas-header flex-row-reverse">
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <h4 className="offcanvas-title text-center fw-bold" id="offcanvasPortfolioLabel">Projects</h4>

                    <div className="container mt-5">
                        <div className="portfolio-header d-flex flex-column flex-lg-row container-fluid justify-content-evenly">
                            <div className="portfolio-image mb-3 mb-lg-0">
                                <img src={portfolioIlustration} alt="Portfolio 1" />
                            </div>
                            <div className="portfolio-header-text ms-lg-3 text-center text-lg-start">
                                <p className="portfolio-header-desc fs-6 lh-lg">
                                    My projects encompass a variety of technologies and frameworks, showcasing my adaptability and problem-solving skills. I have experience building backend systems using Golang and Laravel, developing mobile applications with Java, and crafting dynamic web applications. Notable projects include a freeroam gamemode for GTA San Andreas Multiplayer, a car rental web application, and an AI-powered learning platform. My focus is on creating efficient, secure, and scalable systems with features like RESTful APIs, payment gateway integration, and real-time data processing. Below are some of my highlighted projects, with repository links provided for further exploration.
                                </p>
                            </div>
                        </div>
                        <br />
                        <hr />
                    </div>


                    <div className="container mt-5">
                        <h3 className="fw-bold mb-4">My Projects</h3>
                        <div className="row">
                            {projects.map((project, index) => (
                                <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                                    <div className="card h-100 text-bg-dark">
                                        <div className="card-body">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="project-date text-info">{project.date}</p>
                                            <p className="project-desc">{project.description}</p>
                                            <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer" className="animated-link">View Repository</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;