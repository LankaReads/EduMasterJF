import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview.css';
import { FaHeartbeat, FaUserMd, FaLaptopMedical, FaStethoscope } from 'react-icons/fa';

function Overview() {
    return (
        <div className="overview-container container-fluid py-5">
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaHeartbeat size={50} className="icon mb-3" />
                        <h3 className="stat-number">300,000+</h3>
                        <p className="stat-text">Patients Served</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaUserMd size={50} className="icon mb-3" />
                        <h3 className="stat-number">20,000+</h3>
                        <p className="stat-text">Healthcare Professionals</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaLaptopMedical size={50} className="icon mb-3" />
                        <h3 className="stat-number">600+</h3>
                        <p className="stat-text">AI Tools Implemented</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaStethoscope size={50} className="icon mb-3" />
                        <h3 className="stat-number">150+</h3>
                        <p className="stat-text">Medical Programs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
