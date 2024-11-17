import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subscription.css';

function MedicineInfo() {
    const medicineImg1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAU_Tss-A4841Fex7NLsLO1krqnO9W4Jd8oA&s'; // Placeholder medical AI image
    const medicineImg2 ='https://healthsnap.io/wp-content/uploads/2023/09/c8544029-c7ed-4dea-8f12-8be26ca1133f.png'; // Placeholder medical support image

    return (
        <div className="medicine-section">
            <div className="container py-3"> {/* Reduced padding */}
                <div className="row text-center mb-4">
                    <div className="col">
                        <h2 className="section-title">Why Choose AI for Medical Advancements?</h2>
                        <p className="section-subtitle">Revolutionizing healthcare with AI-driven solutions for clinicians and patients alike</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card medicine-card">
                            <img src={medicineImg1} className="card-img-top" alt="AI Medical Technology" />
                            <div className="card-body">
                                <h5 className="card-title">AI-Powered Diagnostic Tools</h5>
                                <p className="card-text">
                                    Harnessing artificial intelligence, our platform supports faster and more accurate diagnoses, enhancing decision-making in critical medical scenarios.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card medicine-card">
                            <img src={medicineImg2} className="card-img-top" alt="Medical Expert Support" />
                            <div className="card-body">
                                <h5 className="card-title">Enhanced Patient Care & Support</h5>
                                <p className="card-text">
                                    Our AI-driven tools provide healthcare professionals with predictive insights and patient management support, ensuring optimal care and efficient treatment pathways.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedicineInfo;
