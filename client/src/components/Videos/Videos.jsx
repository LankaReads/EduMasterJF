import React from 'react';
import '@/components/Videos/Videos.css';
import { Button } from 'react-bootstrap';

function Videos() {
  const videos = [
    {
      title: "AI in Medical Imaging",
      src: "https://www.youtube.com/embed/iZjWEVkDrHY?si=QWFzLk2e-lCLnvjT", // Placeholder video URL
      description: "Learn how AI is revolutionizing medical imaging and diagnostic accuracy.",
      channelUrl: "https://www.youtube.com/channel/medicalimaging",
    },
    {
      title: "Machine Learning in Healthcare",
      src: "https://www.youtube.com/embed/TfkHrvct1hg?si=DsO3SCdDPFT-j3s_", // Placeholder video URL
      description: "Explore machine learning applications in personalized medicine and patient care.",
      channelUrl: "https://www.youtube.com/channel/healthcareML",
    },
    {
      title: "AI for Drug Discovery",
      src: "https://www.youtube.com/embed/4anbQ9v3xlM?si=nRpzOWKZtH3uBBcb", // Placeholder video URL
      description: "Understand how AI accelerates the drug discovery process, making treatments accessible.",
      channelUrl: "https://www.youtube.com/channel/drugdiscoveryAI",
    },
  ];

  return (
    <div className="videos-section container-fluid py-5">
      <h2 className="text-center mb-5 mm">AI in Medicine: Educational Videos</h2>
      <div className="row g-4">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 d-flex flex-column align-items-center video-card">
            <div className="video-container">
              <iframe
                className="youtube-video"
                width="100%"
                height="250"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="mt-3 video-title">{video.title}</h5>
            <p className="text-center video-description">{video.description}</p>
            <Button
              href={video.channelUrl}
              target="_blank"
              className="btn btn-danger mt-auto go-channel-btn"
            >
              Go to Channel
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
