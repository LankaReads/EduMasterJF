import React, { useState, useEffect } from 'react';
import NavBar from '@/components/navBar/Nav';
import Footer from '@/components/Footer/footer';
import AdminNavBar from '@/components/AdminNavBar/AdminNavBar';

function AdminBlog() {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({ title: '', content: '', image: '', author: '' });
    const [editingPostId, setEditingPostId] = useState(null);

    // Fetch posts function
    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/api/blogs');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        }
    };

    // Fetch posts on component mount
    useEffect(() => {
        fetchPosts();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Create or update a post
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingPostId) {
                await fetch(`/api/api/blogs/${editingPostId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            } else {
                await fetch('/api/api/blogs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            }
            setFormData({ title: '', content: '', image: '', author: '' });
            setEditingPostId(null);
            fetchPosts();
        } catch (error) {
            console.error("Failed to save post:", error);
        }
    };

    // Handle editing a post
    const handleEdit = (post) => {
        setEditingPostId(post._id);
        setFormData({ title: post.title, content: post.content, image: post.image, author: post.author });
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/api/blogs/${id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete the blog post');
            }
    
            // Refresh the posts list after deletion
            fetchPosts();
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };
    

    return (
        <>
            <AdminNavBar/>
            <br /><br /><br />
            <div className="container my-5">
                <h1 className="text-center mb-5" style={{ color: '#f42d00' }}>Admin - Manage Blog Posts</h1>

                {/* Blog Post Form */}
                <div className="card mb-5">
                    <div className="card-header">{editingPostId ? 'Edit Blog Post' : 'Create New Blog Post'}</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Content</label>
                                <textarea name="content" className="form-control" rows="3" value={formData.content} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input type="text" name="image" className="form-control" value={formData.image} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text" name="author" className="form-control" value={formData.author} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: '#f42d00' }}>
                                {editingPostId ? 'Update Post' : 'Create Post'}
                            </button>
                            {editingPostId && (
                                <button
                                    type="button"
                                    className="btn btn-secondary mt-3 ml-3"
                                    onClick={() => {
                                        setEditingPostId(null);
                                        setFormData({ title: '', content: '', image: '', author: '' });
                                    }}
                                >
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>
                </div>

                {/* Table of Blog Posts */}
                <h2 className="text-center mb-4">Existing Blog Posts</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post._id}>
                                    <td>
                                        <img src={post.image} alt={post.title} style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                                    </td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>{new Date(post.date).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-primary btn-sm mr-2"
                                            style={{ borderColor: '#f42d00', color: '#f42d00' }}
                                            onClick={() => handleEdit(post)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => handleDelete(post._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AdminBlog;
