import React from "react";
import '../about/about.css';
import my from '../../assets/IMG_4473.jpg';
import githubIcon from '../../assets/github.svg';

function About() {

    return (
        <>
            <div class="offcanvas offcanvas-bottom vh-100" tabindex="-1" id="offcanvas-about" aria-labelledby="offcanvasAboutLabel">
                <div class="offcanvas-header flex-row-reverse">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    <h4 class="offcanvas-title text-center fw-bold" id="offcanvasAboutLabel">About Me</h4>

                    <div class="d-flex flex-column mt-4">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-4 myphoto mb-5">
                                    <img src={my} alt="Foto Saya" class="rounded img-fluid" />
                                </div>
                                <div class="col-12 col-md-7">
                                    <p class="fs-6 mb-4" style={{ textAlign: "justify" }}>I am an Information Technology student at Brawijaya University with a strong
                                        passion for web development, specializing in Back End engineering. Experienced in
                                        building scalable RESTful APIs, optimizing databases, and implementing secure
                                        server-side solutions using programming languages like PHP, Golang, and
                                        frameworks like Laravel. I am seeking opportunities to contribute my expertise to
                                        create impactful and reliable web applications</p>

                                    <hr />

                                    <div class="personal-info mt-4">
                                        <div class="row justify-content-start">
                                            <div class="col-12 col-sm-6 col-md-4">
                                                <h6 class="fw-bold">Name</h6>
                                                <p>Syahreza Ferdian</p>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4">
                                                <h6 class="fw-bold">Email</h6>
                                                <p>syahrezafistiferdian32@gmail.com</p>
                                            </div>
                                        </div>

                                        <div class="row justify-content-start mt-3">
                                            <div class="col-12 col-sm-6 col-md-4">
                                                <h6 class="fw-bold">Location</h6>
                                                <p>Malang City, East Java, Indonesia</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div class="contact mt-4">
                                        <h6 class="fw-bold">Connect with me</h6>
                                        <div class="d-flex justify-content-start mt-3">
                                            <div class="me-2">
                                                <a href="https://stackoverflow.com/users/20017095" target="blank">
                                                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="20017095" height="30" width="40" />
                                                </a>
                                            </div>

                                            <div class="me-2">
                                                <a href="https://instagram.com/syahrezaaff" target="blank">
                                                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="syahrezaaff" height="30" width="40" />
                                                </a>
                                            </div>

                                            <div class="me-2">
                                                <a href="https://www.hackerrank.com/syahrezaferdian" target="blank">
                                                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="syahrezaferdian" height="30" width="40" />
                                                </a>
                                            </div>

                                            <div class="me-2">
                                                <a href="https://www.linkedin.com/in/syahreza-ferdian-b43647287/" target="blank">
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="linkedin_syahreza" height="30" width="40" />
                                                </a>
                                            </div>

                                            <div class="me-2">
                                                <a href="https://github.com/Syahreza-Ferdian/" target="blank">
                                                    <img src={githubIcon} alt="github_syahreza" height="30" width="40" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 class="offcanvas-title text-center fw-bold mt-5" id="offcanvasAboutLabel">Skills</h4>

                    <div class="skill-container row justify-content-center mt-5 mx-1">
                        <div class="col-12 col-md-6 mb-4">
                            <div class="card text-bg-dark px-3 py-2 rounded-4">
                                <div class="d-flex">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" class="skill-card-icon" alt="React icon" />

                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title fw-bold fs-4 mb-3">Front End Web Development</h5>
                                        <p class="card-text lh-base" style={{ textAlign: "justify" }}>
                                            I have developed a wide range of web applications, utilizing core front-end technologies such as HTML, CSS, and JavaScript to build responsive and interactive user interfaces. I am proficient in using modern front-end frameworks like React.js and Vue.js to create dynamic, component-based applications that are both efficient and maintainable.
                                        </p>

                                        <div class="d-flex flex-wrap">
                                            <span class="me-2">Tech Stack: </span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>HTML</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>CSS</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>JavaScript</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>React JS</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>Vue JS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="card text-bg-dark px-3 py-2 rounded-4">
                                <div class="d-flex">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" class="skill-card-icon" alt="Golang icon" />

                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title fw-bold fs-4 mb-3">Back End Web Development</h5>
                                        <p class="card-text lh-base" style={{ textAlign: "justify" }}>
                                            I have extensive experience in building robust and scalable back-end solutions using technologies like Laravel, Golang, and PHP. I am proficient in developing RESTful APIs, designing efficient database schemas, and optimizing server-side performance. My expertise also includes working with SQL databases, ensuring secure and high-performing systems. I am well-versed in applying best practices for back-end development, including writing clean, maintainable code and performing comprehensive testing. My focus is on creating seamless, reliable, and scalable solutions that meet the needs of modern web applications.
                                        </p>

                                        <div class="d-flex flex-wrap">
                                            <span class="me-2">Tech Stack: </span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>Golang</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>PHP</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>Laravel</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>MySQL</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>PostgreSQL</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>Docker</span>
                                            <span class="badge rounded-pill bg-info me-2" style={{ fontFamily: 'monospace', fontSize: "12px" }}>Postman</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;
