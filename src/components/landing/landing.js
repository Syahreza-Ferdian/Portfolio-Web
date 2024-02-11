import React from "react";
import '../landing/landing.css';


function Landing() {
    return (
        <section className="landing">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="wrapper text-center">
                        <p className="upper-text">Hello, I'm</p>
                        <p className="name-text">Syahreza Fisti Ferdian</p>
                        <small className="desc-land">Undergraduate Student of Information Technology</small>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;