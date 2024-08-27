import React from "react";
import '../about/about.css';

function About() {

    return (
        <>
            {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-about" aria-controls="offcanvasBottom" id="tog">Toggle bottom offcanvas</button> */}

            <div class="offcanvas offcanvas-bottom vh-100" tabindex="-1" id="offcanvas-about" aria-labelledby="offcanvasAboutLabel">
                <div class="offcanvas-header flex-row-reverse">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    <h5 class="offcanvas-title text-center" id="offcanvasAboutLabel">About Me</h5>
                </div>
            </div>
        </>
    );
}


export default About;