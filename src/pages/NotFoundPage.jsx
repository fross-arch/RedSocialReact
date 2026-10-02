import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', textAlign: 'center' }}>
      <div className="w3-card w3-round-large w3-white w3-padding-32" style={{ maxWidth: '500px', width: '100%' }}>
        <img
          src="/logo1.png"
          alt="PochecheBook"
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'contain', backgroundColor: '#fff', marginBottom: '16px' }}
        />
        <h1 style={{ fontWeight: 800, fontSize: '48px', color: '#1877f2', margin: 0 }}>404</h1>
        <h3 style={{ fontWeight: 700, margin: '10px 0' }}>Página no encontrada</h3>
        <p style={{ color: '#65676b', fontSize: '15px', marginBottom: '24px' }}>
          La página que buscas no existe o ha sido movida en PochecheBook.
        </p>
        <Link to="/" className="w3-button w3-theme-d2 w3-round-large" style={{ fontWeight: 600, padding: '10px 24px' }}>
          <i className="fa fa-home w3-margin-right"></i>Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
