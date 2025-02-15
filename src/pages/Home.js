import React from 'react';
import './Home.css';
import officersData from '../json/officers.json';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Charlotte Club Swimming</h1>
        <p>Sanctioned under College Club Swimming (CCS)</p>
      </header>

      <section className="team-info">
        <h2>Welcome to Niner Nation Swimming!</h2>
        <p>Join us in our pursuit of excellence both in and out of the pool. Our team combines competitive swimming with the college experience, creating lasting friendships and unforgettable memories.</p>
      </section>

      <section className="officers">
        <h2>Meet Our Officers</h2>
        <div className="officers-grid">
          {officersData.officers.map((officer, index) => (
            <div key={index} className="officer-card">
              <img src={officer.image} alt={officer.name} className="officer-image" />
              <h3>{officer.name}</h3>
              <p className="officer-title">{officer.title}</p>
              <a href={`mailto:${officer.email}`} className="officer-email">{officer.email}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
