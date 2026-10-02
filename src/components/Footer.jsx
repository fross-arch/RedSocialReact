import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="w3-container w3-theme-d3 w3-padding-16">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff' }}
          title="PochecheBook - Ir al inicio"
        >
          <img
            src="/logo1.png"
            alt="PochecheBook"
            style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'contain', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
          />
          <h5 style={{ margin: 0, fontWeight: 700 }}>PochecheBook</h5>
        </Link>
      </footer>

      <footer className="w3-container w3-theme-d5" style={{ padding: '20px 16px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
          Diseñado por:
        </p>
        <p style={{ margin: '0 0 10px 0', fontSize: '13.5px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap', color: '#ffffff' }}>
          <span><strong>Bryan Rafael Mendoza</strong></span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span><strong>Sebastián Gonzales</strong></span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span><strong>Mariana Rico</strong></span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span><strong>Yadir Morales</strong></span>
        </p>
        <p style={{ margin: 0, fontSize: '11.5px', opacity: 0.75 }}>
          © {new Date().getFullYear()} PochecheBook · Red Social en React
        </p>
      </footer>
    </>
  );
}
