import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSocial } from '../context/SocialContext';

export default function RegisterPage() {
  const { registerUser } = useSocial();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('1998-05-15');
  const [gender, setGender] = useState('Hombre');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [avatar, setAvatar] = useState('/logo1.png');
  const [errorMsg, setErrorMsg] = useState('');

  const fileInputRef = useRef(null);

  const handleAvatarUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('El nombre completo es obligatorio.');
      return;
    }

    registerUser({
      name: name.trim(),
      email: email.trim(),
      password: password.trim() || '123456',
      role: role.trim() || 'Miembro de PochecheBook',
      location: location.trim() || 'Colombia / Internacional',
      birthDate: birthDate || '1998-05-15',
      avatar: avatar || '/logo1.png'
    });

    navigate('/', { replace: true });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', display: 'flex', flexDirection: 'column' }}>
      {/* Barra superior */}
      <div className="w3-bar w3-theme-d2 w3-padding" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/login" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/logo1.png"
            alt="Logo PochecheBook"
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'contain', backgroundColor: '#fff' }}
          />
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>PochecheBook</span>
        </Link>
        <div>
          <Link to="/login" className="w3-button w3-theme-l1 w3-round" style={{ marginRight: '8px', fontSize: '13px' }}>
            <i className="fa fa-sign-in"></i> Iniciar sesión
          </Link>
          <Link to="/registro" className="w3-button w3-theme-d4 w3-round" style={{ fontSize: '13px' }}>
            <i className="fa fa-user-plus"></i> Registrarse
          </Link>
        </div>
      </div>

      {/* Contenedor central */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px 16px' }}>
        <div style={{ maxWidth: '520px', width: '100%', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 6px 24px rgba(0,0,0,0.12)', padding: '24px' }}>
          <div className="w3-container w3-theme-d2 w3-round-large w3-padding-16 w3-center" style={{ marginBottom: '18px' }}>
            <h3 style={{ margin: 0, fontWeight: 700 }}>
              <i className="fa fa-user-plus w3-margin-right"></i>Crear nueva cuenta
            </h3>
            <span style={{ fontSize: '13px', opacity: 0.9 }}>Es rápido, fácil y te conecta al instante</span>
          </div>

          {errorMsg && (
            <div className="w3-pale-red w3-padding w3-round w3-small" style={{ marginBottom: '14px' }}>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleRegister}>
            {/* Foto de perfil */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={avatar}
                  alt="Avatar"
                  style={{ width: '74px', height: '74px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #1877f2' }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    background: '#1877f2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Subir foto desde tu PC"
                >
                  <i className="fa fa-camera"></i>
                </button>
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarUpload}
                accept="image/*"
                style={{ display: 'none' }}
              />

              <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '8px' }}>
                {[
                  "/logo1.png",
                  "https://www.w3schools.com/w3images/avatar2.png",
                  "https://www.w3schools.com/w3images/avatar5.png",
                  "https://www.w3schools.com/w3images/avatar6.png"
                ].map((preset, i) => (
                  <img
                    key={i}
                    src={preset}
                    alt={`Preset ${i}`}
                    onClick={() => setAvatar(preset)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      border: avatar === preset ? '2px solid #1877f2' : '1px solid #ccc'
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="w3-section">
              <label style={{ fontSize: '13px', fontWeight: 600 }}>Nombre completo: *</label>
              <input
                className="w3-input w3-border w3-round"
                type="text"
                placeholder="Ej: Daniel Castillo"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w3-section">
              <label style={{ fontSize: '13px', fontWeight: 600 }}>Correo electrónico:</label>
              <input
                className="w3-input w3-border w3-round"
                type="email"
                placeholder="daniel@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w3-section">
              <label style={{ fontSize: '13px', fontWeight: 600 }}>Contraseña:</label>
              <input
                className="w3-input w3-border w3-round"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="w3-section" style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: 600 }}>Fecha de nacimiento:</label>
                <input
                  className="w3-input w3-border w3-round"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>

              <div className="w3-section" style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: 600 }}>Género:</label>
                <select
                  className="w3-select w3-border w3-round"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Hombre</option>
                  <option>Mujer</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="w3-section" style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: 600 }}>Profesión:</label>
                <input
                  className="w3-input w3-border w3-round"
                  type="text"
                  placeholder="Ej: Diseñador UI / Estudiante"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="w3-section" style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: 600 }}>Ciudad:</label>
                <input
                  className="w3-input w3-border w3-round"
                  type="text"
                  placeholder="Ej: Bogotá, Colombia"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w3-button w3-theme-d2 w3-round w3-block"
              style={{ fontWeight: 700, padding: '12px', fontSize: '15px', marginTop: '12px' }}
            >
              <i className="fa fa-user-plus"></i> Registrarse en PochecheBook
            </button>
          </form>

          <p className="w3-center" style={{ fontSize: '14px', marginTop: '18px', color: '#65676b' }}>
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" style={{ color: '#1877f2', fontWeight: 700, textDecoration: 'none' }}>
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
