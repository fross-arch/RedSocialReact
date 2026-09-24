import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="w3-container w3-theme-d3 w3-padding-16" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo1.png"
          alt="PochecheBook"
          style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'contain', backgroundColor: '#fff' }}
        />
        <h5 style={{ margin: 0, fontWeight: 700 }}>PochecheBook</h5>
      </footer>
      <footer className="w3-container w3-theme-d5">
        <p>
          Diseñado con el tema de{' '}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
}
