import React from 'react';
import './Photos.css';
import photosData from '../json/photos.json';

function Photos() {
  return (
    <div className="photos">
      <header className="photos-header">
        <h1>Photo Galleries</h1>
        <p>Memories from our meets, practices, and team events</p>
      </header>

      <section className="instructions">
        <div className="instruction-card">
          <h3>How to Use Our Galleries</h3>
          <ul>
            <li>{photosData.instructions.viewing}</li>
            <li>{photosData.instructions.downloading}</li>
            <li>{photosData.instructions.sharing}</li>
          </ul>
        </div>
      </section>

      <section className="galleries">
        {photosData.galleries.map((gallery, index) => (
          <a 
            key={index}
            href={gallery.albumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-card"
          >
            <div className="gallery-thumbnail">
              <img src={gallery.thumbnailUrl} alt={gallery.title} />
              <span className="photo-count">{gallery.photoCount}</span>
            </div>
            <div className="gallery-info">
              <h2>{gallery.title}</h2>
              <p className="gallery-date">{gallery.date}</p>
              <p className="gallery-description">{gallery.description}</p>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Photos;
