import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';

import Subscription from '@/components/Subscription/subscription';

import React, { useState, useEffect } from 'react';
import '@/pages/Blogs/Blogs.css'; // Importing custom CSS for additional styles
import Section from '@/components/Section/Section';

function Blogs() {
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:5000/api/blogs');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleReadMore = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        <>
            <NavBar />
            
            <div className=" container-blog mt-0 pt-20">
               {/* <h1 className="text-center mb-5 blog-heading">Our Blogs</h1>*/}
                <div className="row justify-content-center"> {/* Center the row content */}
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className="col-md-8 mb-4"> {/* Set column width to 8 out of 12 */}
                                <div className="card shadow-lg border-0">
                                    <div className="image-container">
                                        <img src={post.image} className=" full-height-img" alt={post.title} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title-blog">{post.title}</h5>
                                        <p className="card-text">
                                            {expandedPostId === post._id ? post.content : post.content.substring(0, 100) + '...'}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">By {post.author} on {post.date}</small>
                                        </p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <button
                                            className="btn btn-outline-primary"
                                            style={{ borderColor: '#007BFF', color: '#007BFF' }}
                                            onClick={() => handleReadMore(post._id)}
                                        >
                                            {expandedPostId === post._id ? 'Show Less' : 'Read More'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No blog posts available.</p>
                    )}
                </div>

                    <Section/>
                    <Subscription/>

            </div>
            <Footer />
        </>
    );
}

export default Blogs;
