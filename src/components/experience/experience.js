import React from "react";
import "./experience.css";
import MyCV from "../../assets/MyCV.pdf";

function Experience() {
    return (
        <>
            <div
                className="offcanvas offcanvas-bottom vh-100"
                tabIndex="-1"
                id="offcanvas-experience"
                aria-labelledby="offcanvasExperienceLabel"
            >
                <div className="offcanvas-header flex-row-reverse">
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body small">
                    <h4
                        className="offcanvas-title text-center fw-bold"
                        id="offcanvasExperienceLabel"
                    >
                        Experience
                    </h4>

                    <div className="container mt-5">
                        <h5 className="fw-bold mb-4">My Experiences So Far</h5>
                        <div className="experience mt-1">
                            <div className="experience-item border-bottom">
                                <div className="timeline-icon"></div>
                                <div className="experience-content d-flex justify-content-between">
                                    <div className="job-details">
                                        <h3 className="job-title">
                                            Laboratory Teaching Assistant of
                                            Basic Programming
                                        </h3>
                                        <p className="company-name">
                                            Faculty of Computer Science of
                                            Universitas Brawijaya
                                        </p>
                                    </div>
                                    <p className="duration mt-4">
                                        08/2023 - 12/2023
                                    </p>
                                </div>
                            </div>

                            <div className="experience-item border-bottom">
                                <div className="timeline-icon"></div>
                                <div className="experience-content d-flex justify-content-between">
                                    <div className="job-details">
                                        <h3 className="job-title">
                                            Member at Back End Department of BCC
                                            Filkom 2024
                                        </h3>
                                        <p className="company-name">
                                            Basic Computing Community Filkom UB
                                        </p>
                                    </div>
                                    <p className="duration mt-4">
                                        04/2024 - Present
                                    </p>
                                </div>
                            </div>

                            <div className="experience-item border-bottom">
                                <div className="timeline-icon"></div>
                                <div className="experience-content d-flex justify-content-between">
                                    <div className="job-details">
                                        <h3 className="job-title">
                                            Laboratory Teaching Assistant of
                                            Advanced Programming
                                        </h3>
                                        <p className="company-name">
                                            Faculty of Computer Science of
                                            Universitas Brawijaya
                                        </p>
                                    </div>
                                    <p className="duration mt-4">
                                        02/2024 - 06/2024
                                    </p>
                                </div>
                            </div>

                            <div className="experience-item border-bottom">
                                <div className="timeline-icon"></div>
                                <div className="experience-content d-flex justify-content-between">
                                    <div className="job-details">
                                        <h3 className="job-title">
                                            Full Stack Web Developer Intern
                                        </h3>
                                        <p className="company-name">
                                            PT. Aksamedia Mulia Digital
                                        </p>
                                    </div>
                                    <p className="duration mt-4">
                                        02/2025 - Present
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h5 className="fw-bold mt-5 mb-4">My CV</h5>
                        <object
                            data={MyCV}
                            width="100%"
                            height="800px"
                            type="application/pdf"
                        >
                            <p>
                                Your browser doesn't support PDFs. Please
                                download the PDF to view it:{" "}
                                <a href={MyCV}>Download PDF</a>.
                            </p>
                        </object>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
