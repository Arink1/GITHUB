import React from 'react';
import { Link } from 'react-router-dom';

function MainContent() {
  const videoID = '923127843'; // Example video ID
  const vimeoUrl = `https://player.vimeo.com/video/${videoID}?autoplay=1&loop=1&muted=1&controls=0&background=1`;

  return (
<main style={{ 
  width: '100%', // Changed from 100vw to 100%
  position: 'relative',
  backgroundColor: 'transparent',
  margin: 0,
  padding: 0,
  overflowX: 'hidden'
}}>
      <div style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
        <iframe
          src={vimeoUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>
      <h1 style={{ textAlign: "center" }}>Main Content Area</h1>
      <Link to="/about" style={{ display: 'block', textAlign: 'center', color: 'blue', textDecoration: 'underline' }}>Go to About Page</Link>
    </main>
  );
}

export default MainContent;