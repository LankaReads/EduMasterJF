import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/Footer/Footer.css'; // Custom styles
import logo from "../../img/logo1.png";

function Footer() {
    return (
        <footer className="container-fluid text-center text-lg-start bg-darkblue text-white py-4">
            <section className="container">
            <div className="row text-center text-md-start">
                    {/* Logo and Description */}
                    <div className="col-md-4 col-lg-3 mb-4 d-flex justify-content-center justify-content-md-start">
                        <a href="#">
                        <img src={logo} className="logo2 img-fluid" alt="EduMaster Logo" />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 col-lg-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-reset">Home</a></li>
                            <li><a href="/Courses" className="text-reset">Courses</a></li>
                            <li><a href="/about" className="text-reset">About</a></li>
                            <li><a href="/contact" className="text-reset">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-md-4 col-lg-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Resources</h6>
                        <ul className="list-unstyled">
                            <li><a href="/Blogs" className="text-reset">Blogs</a></li>
                            <li><a href="/Post" className="text-reset">Post</a></li>
                            <li><a href="/researchers" className="text-reset">Researchers</a></li>
                            <li><a href="/projects" className="text-reset">Projects</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-4 col-lg-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Contact Us</h6>
                        <p><i className="fas fa-home me-2"></i>Sri Lanka, Colombo, Homagama</p>
                        <p><i className="fas fa-envelope me-2"></i>ceylonranking@gmail.com</p>
                        <p><i className="fas fa-phone me-2"></i>+94 76 170 7118</p>
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                © 2024 Copyright:
                <a className="text-reset fw-bold" href="madeinsrilanka.nl"> madeinsrilanka.nl</a>
            </div>
        </footer>
    );
}

export default Footer;
