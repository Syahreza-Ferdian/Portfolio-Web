import React, { useState, useEffect } from "react";
import './contact.css';
import emailjs from "@emailjs/browser";

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
    }, []); 

    useEffect(() => {
        const savedTimer = localStorage.getItem('timer');
        if (savedTimer) {
            setTimer(parseInt(savedTimer));
        }

        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevState => {
                    const newTimer = prevState - 1;
                    localStorage.setItem('timer', newTimer); 
                    return newTimer;  
                });
            }, 1000);  
        }
        return () => clearInterval(interval);  
    }, [timer]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting || timer > 0) {
            alert("Please wait a moment before submitting again.");
            return;  
        }

        const TIMER_LIMIT = 180;

        setIsSubmitting(true);
        setTimer(TIMER_LIMIT);  
        localStorage.setItem('timer', TIMER_LIMIT);  

        const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;

        try {
            await emailjs.send(serviceId, templateId, {
                to_name: "Syahreza Fisti Ferdian",
                from_name: e.target.name.value,
                reply_to: e.target.email.value,
                message: e.target.message.value,
            });
            alert("Email successfully sent");
            e.target.reset();  // Clear form after sending message
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="offcanvas offcanvas-bottom vh-100" tabindex="-1" id="offcanvas-contact" aria-labelledby="offcanvasContactLabel">
                <div className="offcanvas-header flex-row-reverse">
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <h4 className="offcanvas-title text-center fw-bold" id="offcanvasContactLabel">Contact</h4>

                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="card-contact p-4" data-bs-theme="dark">
                                    <h2 className="mb-4">Message Me</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control bg-dark" id="name" name="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control bg-dark" id="email" name="email" placeholder="Your Email" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea className="form-control bg-dark" id="message" name="message" placeholder="Your Message" rows="4" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting || timer > 0}>
                                            Send Message
                                        </button>
                                        {timer > 0 && <p>Please wait {timer} seconds before submitting again.</p>}
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="card-contact p-4 rounded-4 bg-dark" data-bs-theme="dark">
                                    <h2>Contact Info</h2>
                                    <p>Always available for freelance work if the right project comes along, feel free to contact me!</p>
                                    <p><strong>Name:</strong> Syahreza Fisti Ferdian</p>
                                    <p><strong>Call Me:</strong> +62 895-4149-49161</p>
                                    <p><strong>Email Me:</strong> syahrezafistiferdian32@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
