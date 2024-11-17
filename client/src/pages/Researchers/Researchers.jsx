// Researchers.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';

const Researchers = () => {
    const [researchersData, setResearchersData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/research")
            .then((response) => response.json())
            .then((data) => setResearchersData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
        <NavBar/>
        
        <div className=''>
            <br /><br /><br /><br />
            <header className="bg-primary text-white text-center py-10 ">
                <h1>Client Research</h1>
                <p>Explore Our Comprehensive Research Projects</p>
            </header>
            

            <div className="container mt-4">
                <div className="row">
                    {researchersData.map((research, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow">
                                <img src={research.imageUrl} className="card-img-top" alt={research.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{research.title}</h5>
                                    <p className="card-text">{research.description}</p>
                                    <a href={research.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Researchers;
