import React, { useState } from 'react';
import './Meets.css';
import meetsData from '../json/meets.json';

function SeasonSection({ season, isExpanded, onToggle }) {
  return (
    <div className="season-section">
      <button 
        className="season-toggle"
        onClick={onToggle}
      >
        <h2>{season.season} Season {season.current && "(Current)"}</h2>
        <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </button>
      
      {isExpanded && (
        <div className="season-content">
          <div className="semester-section">
            <h3>Fall</h3>
            <div className="meets-grid">
              {season.fall.map((meet, index) => (
                <div key={index} className={`meet-card ${meet.locationType}`}>
                  <h4>{meet.name}</h4>
                  <div className="meet-details">
                    <p className="meet-date">📅 {meet.date}</p>
                    <p className="meet-location">📍 {meet.location}</p>
                  </div>
                  <p className="meet-description">{meet.description}</p>
                  <div className="meet-buttons">
                    {meet.meetPacket && (
                      <a 
                        href={meet.meetPacket}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="meet-button packet"
                      >
                        Meet Packet
                      </a>
                    )}
                    {meet.results && (
                      <a 
                        href={meet.results}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="meet-button results"
                      >
                        Results
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="semester-section">
            <h3>Spring</h3>
            <div className="meets-grid">
              {season.spring.map((meet, index) => (
                <div key={index} className={`meet-card ${meet.locationType}`}>
                  <h4>{meet.name}</h4>
                  <div className="meet-details">
                    <p className="meet-date">📅 {meet.date}</p>
                    <p className="meet-location">📍 {meet.location}</p>
                  </div>
                  <p className="meet-description">{meet.description}</p>
                  <div className="meet-buttons">
                    {meet.meetPacket && (
                      <a 
                        href={meet.meetPacket}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="meet-button packet"
                      >
                        Meet Packet
                      </a>
                    )}
                    {meet.results && (
                      <a 
                        href={meet.results}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="meet-button results"
                      >
                        Results
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Meets() {
  const [expandedSeasons, setExpandedSeasons] = useState(
    meetsData.meets.reduce((acc, season) => ({
      ...acc,
      [season.season]: season.current
    }), {})
  );

  const toggleSeason = (season) => {
    setExpandedSeasons(prev => ({
      ...prev,
      [season]: !prev[season]
    }));
  };

  return (
    <div className="meets">
      <header className="meets-header">
        <h1>Competition Schedule</h1>
        <p>Join us at these exciting swimming competitions!</p>
      </header>

      <div className="meets-container">
        {meetsData.meets.map((season, index) => (
          <SeasonSection
            key={index}
            season={season}
            isExpanded={expandedSeasons[season.season]}
            onToggle={() => toggleSeason(season.season)}
          />
        ))}
      </div>

      <section className="meets-info">
        <h2>About Our Competitions</h2>
        <p>Our team participates in <a href="https://www.collegeclubswimming.com" target="_blank" rel="noopener noreferrer" className="ccs-link">College Club Swimming (CCS)</a> sanctioned meets throughout the academic year. These competitions provide opportunities for swimmers of all skill levels to compete and improve their times.</p>
        <p>For more information about specific meets or how to participate, please contact our team officers.</p>
      </section>
    </div>
  );
}

export default Meets;
