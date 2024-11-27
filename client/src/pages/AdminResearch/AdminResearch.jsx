// AdminResearch.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';
import AdminNavBar from '@/components/AdminNavBar/AdminNavBar';

const AdminResearch = () => {
    const [researchersData, setResearchersData] = useState([]);
    const [newResearch, setNewResearch] = useState({ title: '', description: '', imageUrl: '', link: '' });
    const [editResearch, setEditResearch] = useState(null);

    useEffect(() => {
        fetchResearchData();
    }, []);

    const fetchResearchData = async () => {
        try {
            const response = await fetch("/api/api/research");
            const data = await response.json();
            setResearchersData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editResearch) {
            setEditResearch({ ...editResearch, [name]: value });
        } else {
            setNewResearch({ ...newResearch, [name]: value });
        }
    };

    const handleCreateResearch = async () => {
        try {
            const response = await fetch("/api/api/research", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newResearch),
            });
            if (response.ok) fetchResearchData();
            setNewResearch({ title: '', description: '', imageUrl: '', link: '' });
        } catch (error) {
            console.error("Error creating research:", error);
        }
    };

    const handleEditResearch = (research) => {
        setEditResearch(research);
    };

    const handleUpdateResearch = async () => {
        try {
            const response = await fetch(`/api/api/research/${editResearch._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editResearch),
            });
            if (response.ok) fetchResearchData();
            setEditResearch(null);
        } catch (error) {
            console.error("Error updating research:", error);
        }
    };

    const handleDeleteResearch = async (id) => {
        try {
            const response = await fetch(`/api/api/research/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) fetchResearchData();
        } catch (error) {
            console.error("Error deleting research:", error);
        }
    };

    return (
        <>
            <AdminNavBar/>

            <br/>
            <div>br <br /><br /><br />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h2>{editResearch ? 'Edit Research' : 'Add New Research'}</h2>
                            <div className="form-group">
                                <input type="text" name="title" className="form-control" placeholder="Title" value={editResearch ? editResearch.title : newResearch.title} onChange={handleInputChange} />
                                <textarea name="description" className="form-control mt-2" placeholder="Description" value={editResearch ? editResearch.description : newResearch.description} onChange={handleInputChange}></textarea>
                                <input type="text" name="imageUrl" className="form-control mt-2" placeholder="Image URL" value={editResearch ? editResearch.imageUrl : newResearch.imageUrl} onChange={handleInputChange} />
                                <input type="text" name="link" className="form-control mt-2" placeholder="Link" value={editResearch ? editResearch.link : newResearch.link} onChange={handleInputChange} />
                                <button onClick={editResearch ? handleUpdateResearch : handleCreateResearch} className="btn btn-success mt-2">{editResearch ? 'Update Research' : 'Add Research'}</button>
                                {editResearch && <button onClick={() => setEditResearch(null)} className="btn btn-secondary mt-2 ml-2">Cancel</button>}
                            </div>
                        </div>
                        {researchersData.map((research) => (
                            <div className="col-md-4" key={research._id}>
                                <div className="card mb-4 shadow">
                                    <img src={research.imageUrl} className="card-img-top" alt={research.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{research.title}</h5>
                                        <p className="card-text">{research.description}</p>
                                        
                                        <button onClick={() => handleEditResearch(research)} className="btn btn-warning mx-2">Edit</button>
                                        <button onClick={() => handleDeleteResearch(research._id)} className="btn btn-danger">Delete</button>
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

export default AdminResearch;
