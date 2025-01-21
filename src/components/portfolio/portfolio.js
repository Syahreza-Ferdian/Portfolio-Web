import React, { useState, useEffect } from "react";
import './portfolio.css';
import portfolioIlustration from '../../assets/undraw_programming_65t2.svg';
import projectsData from './projects.json';
import ProjectCard from "./projectcard";

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [sortOrder, setSortOrder] = useState("oldest");
    const [filterProject, setFilterProject] = useState("All");

    const filterParam = [
        { param: "All", display: "All" },
        { param: "Golang", display: "Golang" },
        { param: "Laravel", display: "Laravel" },
        { param: "Java", display: "Java" },
        { param: ["PHP Native", "Laravel"], display: "PHP" }
    ]

    useEffect(() => {
        processSortAndFilter();
    }, [sortOrder, filterProject]);

    const processSortAndFilter = () => {
        let filteredProjects = [...projectsData];

        if (filterProject !== "All") {
            if (Array.isArray(filterProject)) {
                filteredProjects = filteredProjects.filter((project) =>
                    filterProject.some((tech) => project.techStack.includes(tech))
                );
            } else {
                filteredProjects = filteredProjects.filter((project) =>
                    project.techStack.includes(filterProject)
                );
            }
        }

        const sortedProjects = filteredProjects.sort((a, b) => {
            const dateA = new Date(a.date.split(" - ")[0]);
            const dateB = new Date(b.date.split(" - ")[0]);
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

        setProjects(sortedProjects);
    };

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
                        <div className="col mb-3 sort-filter-option">
                            <div className="row justify-content-md-end">
                                <div className="col-auto">
                                    <label htmlFor="sortOrder" className="form-label">
                                        Sorted by
                                    </label>
                                    <select
                                        className="form-select w-auto"
                                        data-bs-theme="dark"
                                        id="sortOrder"
                                        value={sortOrder}
                                        onChange={(e) => setSortOrder(e.target.value)}
                                    >
                                        <option value="newest">Newest to Oldest</option>
                                        <option value="oldest">Oldest to Newest</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="filter" className="form-label">
                                        Filter
                                    </label>
                                    <select
                                        className="form-select w-auto"
                                        data-bs-theme="dark"
                                        id="filter"
                                        value={JSON.stringify(filterProject)}
                                        onChange={(e) => setFilterProject(JSON.parse(e.target.value))}
                                    >
                                        {filterParam.map((param, index) => (
                                            <option key={index} value={JSON.stringify(param.param)}>
                                                {param.display}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {projects.map((project, index) => (
                                <ProjectCard 
                                    key={index}
                                    title={project.title}
                                    date={project.date}
                                    description={project.description}
                                    repositoryLink={project.repositoryLink}
                                    techStack={project.techStack}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
