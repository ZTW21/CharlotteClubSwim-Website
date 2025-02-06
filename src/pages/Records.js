import React, { useState } from 'react';
import './Records.css';
import recordsData from '../json/records.json';

function RecordCard({ record }) {
  const content = (
    <>
      <h3>{record.event}</h3>
      <p className="record-time">{record.time}</p>
      <p className="record-holder">{record.names || record.name}</p>
      <p className="record-year">{record.year}</p>
      {record.link && <span className="record-link-icon">🎥</span>}
    </>
  );

  return record.link ? (
    <a 
      href={record.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="record-card clickable"
    >
      {content}
    </a>
  ) : (
    <div className="record-card">
      {content}
    </div>
  );
}

function Records() {
  const [showMens, setShowMens] = useState(true);
  const currentRecords = showMens ? recordsData.mens : recordsData.womens;

  const categories = [
    { key: 'freestyle', title: 'Freestyle' },
    { key: 'backstroke', title: 'Backstroke' },
    { key: 'breaststroke', title: 'Breaststroke' },
    { key: 'butterfly', title: 'Butterfly' },
    { key: 'im', title: 'Individual Medley' },
    { key: 'relays', title: 'Relays' }
  ];

  return (
    <div className="records">
      <header className="records-header">
        <h1>Team Records</h1>
        <p>Charlotte Club Swimming's Fastest Times</p>
        <div className="gender-toggle">
          <button 
            className={`toggle-button ${showMens ? 'active' : ''}`}
            onClick={() => setShowMens(true)}
          >
            Men's Records
          </button>
          <button 
            className={`toggle-button ${!showMens ? 'active' : ''}`}
            onClick={() => setShowMens(false)}
          >
            Women's Records
          </button>
        </div>
      </header>

      <div className="records-container">
        {categories.map(({ key, title }) => (
          <section key={key} className="record-category">
            <h2>{title}</h2>
            <div className="records-grid">
              {currentRecords[key].map((record, index) => (
                <RecordCard key={index} record={record} />
              ))}
              {key === 'relays' && (
                <RecordCard record={recordsData.mixedRelay} />
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Records;
