import React from 'react';
import './Home.css';
import officersData from '../json/officers.json';
import presidentsData from '../json/past-presidents.json';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Charlotte Club Swimming</h1>
        <p>Sanctioned under <a href="https://www.collegeclubswimming.com" target="_blank" rel="noopener noreferrer" className="ccs-link">College Club Swimming (CCS)</a></p>
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

      <section className="past-presidents">
        <h2 className="section-header">Past Presidents</h2>
        <div className="timeline">
          {presidentsData.presidents.map((president, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <img src={president.image} alt={president.name} className="timeline-image" />
                <h3>{president.name}</h3>
                <p className="timeline-years">{president.years}</p>
                <ul className="timeline-achievements">
                  {president.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
                <a href={president.linkedin} target="_blank" rel="noopener noreferrer" className="president-linkedin-button">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
