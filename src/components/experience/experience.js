import React from "react";
import './experience.css';

function Experience() {
    return (
        <>
            <div class="offcanvas offcanvas-bottom vh-100" tabindex="-1" id="offcanvas-experience" aria-labelledby="offcanvasExperienceLabel">
                <div class="offcanvas-header flex-row-reverse">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    <h4 class="offcanvas-title text-center fw-bold" id="offcanvasExperienceLabel">Experience</h4>

                    <div class="container mt-5">
                        <h5 class="fw-bold mb-4">My Experiences So Far</h5>
                        <div class="experience px-5 py-4 mt-1">
                            <div class="experience-item border-bottom">
                                <div class="timeline-icon"></div>
                                <div class="experience-content d-flex justify-content-between">
                                    <div class="job-details">
                                        <h3 class="job-title">Laboratory Teaching Assistant of Basic Programming</h3>
                                        <p class="company-name">Faculty of Computer Science of Universitas Brawijaya</p>
                                    </div>
                                    <p class="duration mt-4">08/2023 - 12/2023</p>
                                </div>
                            </div>

                            <div class="experience-item border-bottom">
                                <div class="timeline-icon"></div>
                                <div class="experience-content d-flex justify-content-between">
                                    <div class="job-details">
                                        <h3 class="job-title">Member at Back End Department of BCC Filkom 2024</h3>
                                        <p class="company-name">Basic Computing Community Filkom UB</p>
                                    </div>
                                    <p class="duration mt-4">04/2024 - Present</p>
                                </div>
                            </div>

                            <div class="experience-item border-bottom">
                                <div class="timeline-icon"></div>
                                <div class="experience-content d-flex justify-content-between">
                                    <div class="job-details">
                                        <h3 class="job-title">Laboratory Teaching Assistant of Advanced Programming</h3>
                                        <p class="company-name">Faculty of Computer Science of Universitas Brawijaya</p>
                                    </div>
                                    <p class="duration mt-4">02/2024 - 06/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;