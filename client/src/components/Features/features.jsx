import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/Features/Features.css';
import { FaRobot, FaHeartbeat, FaStethoscope, FaFileMedicalAlt } from 'react-icons/fa';

function Features() {
    return (
        <div className="container-fluid feature-background py-5">
            <div className="row text-center">
                <h2 className="feature-title mb-5">Our AI-Driven Medical Features</h2>
            </div>
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaRobot size={50} className="feature-icon mb-3" />
                        <h4>AI Diagnostics</h4>
                        <p>Utilize advanced AI algorithms for accurate diagnostics, aiding doctors in identifying and understanding complex health conditions efficiently.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaHeartbeat size={50} className="feature-icon mb-3" />
                        <h4>Real-Time Monitoring</h4>
                        <p>Monitor vital signs in real-time. Our system provides continuous data analysis, ensuring timely intervention and personalized healthcare support.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaStethoscope size={50} className="feature-icon mb-3" />
                        <h4>Remote Consultations</h4>
                        <p>Connect with healthcare professionals remotely. Our AI-powered consultations offer secure and efficient communication for medical advice.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaFileMedicalAlt size={50} className="feature-icon mb-3" />
                        <h4>Data-Driven Insights</h4>
                        <p>Access a comprehensive database for medical research and insights, empowering healthcare professionals to make informed decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
