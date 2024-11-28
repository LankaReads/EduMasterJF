import React from 'react';
import '@/components/Section/Section.css'; // External CSS for additional styling

const Section = () => {
  return (
    <section className="section-container">
      <div className="container">
        <div className="row text-center shadow-sm">
          <h2 className='text-success'>Explore Our AI in Medicine</h2>

          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=1" className="card-img-top fixed-size-img" alt="AI in Diagnosis" />
              <div className="card-body">
                <h5 className="card-title text-success">Home</h5><br />
                <p className="card-text">Revolutionizing diagnostic processes with AI technology.</p>
                <a href="/" className="btn btn-success">Visit home</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=2" className="card-img-top fixed-size-img" alt="Telemedicine" />
              <div className="card-body">
                <h5 className="card-title text-success">About</h5><br />
                <p className="card-text">Connecting patients with doctors from anywhere.</p>
                <a href="/about" className="btn btn-success">About</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=3" className="card-img-top fixed-size-img" alt="AI in Research" />
              <div className="card-body">
                <h5 className="card-title text-success">Projects</h5> <br />
                <p className="card-text">Accelerating medical research with artificial intelligence.</p>
                <a href="/Projects" className="btn btn-success">Projects</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=4" className="card-img-top fixed-size-img" alt="Patient Care" />
              <div className="card-body">
                <h5 className="card-title text-success">Programs</h5> <br />
                <p className="card-text">Enhancing patient care through AI solutions.</p>
                <a href="/Courses" className="btn btn-success">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=5" className="card-img-top fixed-size-img" alt="Healthcare Apps" />
              <div className="card-body">
                <h5 className="card-title text-success">Blogs</h5> <br />
                <p className="card-text">Innovative applications improving healthcare delivery.</p>
                <a href="/Blogs" className="btn btn-success">blogs</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=6" className="card-img-top fixed-size-img" alt="Get Updates" />
              <div className="card-body">
                <h5 className="card-title text-success">Stay Updated</h5> <br />
                <p className="card-text">Join us and get the latest updates in AI medicine.</p>
                <a href="/Contact" className="btn btn-success">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
