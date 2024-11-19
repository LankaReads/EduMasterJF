// Projects.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects data from backend
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://13.60.226.150:5000/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <>
            <NavBar />
            {/* <ProgramNav /> */}

            <div className=''>
            <br /><br /><br /><br />
            <header className="bg-primary text-white text-center py-10 ">
                <h1>On going projects</h1>
                <p>Explore Our Comprehensive onging Projects</p>
            </header>
                <div className="container mt-4">
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 shadow">
                                    <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <a href={project.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">View Progress</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
