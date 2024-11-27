// AdminProject.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';
import AdminNavBar from '@/components/AdminNavBar/AdminNavBar';

const AdminProject = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '', link: '' });
    const [editProject, setEditProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjectsData();
    }, []);

    const fetchProjectsData = async () => {
        try {
            const response = await fetch("https://13.60.226.150:5000/api/projects");
            const data = await response.json();
            setProjectsData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editProject) {
            setEditProject({ ...editProject, [name]: value });
        } else {
            setNewProject({ ...newProject, [name]: value });
        }
    };

    const handleCreateProject = async () => {
        try {
            const response = await fetch("https://13.60.226.150:5000/api/projects", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProject),
            });
            if (response.ok) fetchProjectsData();
            setNewProject({ title: '', description: '', imageUrl: '', link: '' });
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    const handleEditProject = (project) => {
        setEditProject(project);
    };

    const handleUpdateProject = async () => {
        try {
            const response = await fetch(`https://13.60.226.150:5000/api/projects/${editProject._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editProject),
            });
            if (response.ok) {
                fetchProjectsData();
                setEditProject(null);
            }
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const handleDeleteProject = async (id) => {
        try {
            const response = await fetch(`https://13.60.226.150:5000/api/projects/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) fetchProjectsData();
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    return (
        <>

        <AdminNavBar/>
            <div>
                <br /><br />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h2>{editProject ? "Edit Project" : "Add New Project"}</h2>
                            <div className="form-group">
                                <input type="text" name="title" className="form-control" placeholder="Title" value={editProject ? editProject.title : newProject.title} onChange={handleInputChange} />
                                <textarea name="description" className="form-control mt-2" placeholder="Description" value={editProject ? editProject.description : newProject.description} onChange={handleInputChange}></textarea>
                                <input type="text" name="imageUrl" className="form-control mt-2" placeholder="Image URL" value={editProject ? editProject.imageUrl : newProject.imageUrl} onChange={handleInputChange} />
                                <input type="text" name="link" className="form-control mt-2" placeholder="Link" value={editProject ? editProject.link : newProject.link} onChange={handleInputChange} />
                                {editProject ? (
                                    <button onClick={handleUpdateProject} className="btn btn-warning mt-2">Save Changes</button>
                                ) : (
                                    <button onClick={handleCreateProject} className="btn btn-success mt-2">Add Project</button>
                                )}
                            </div>
                        </div>
                        {projectsData.map((project) => (
                            <div className="col-md-4" key={project._id}>
                                <div className="card mb-4 shadow">
                                    <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <button onClick={() => handleEditProject(project)} className="btn btn-warning mx-2">Edit</button>
                                        <button onClick={() => handleDeleteProject(project._id)} className="btn btn-danger">Delete</button>
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

export default AdminProject;
