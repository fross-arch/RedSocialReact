import React, { useState, useRef, useEffect } from 'react';
import { useSocial } from '../context/SocialContext';
import { notificationsList } from '../data/initialData';

export default function Navbar() {
  const {
    currentUser,
    usersList,
    logout,
    sendFriendRequest
  } = useSocial();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);

  const searchContainerRef = useRef(null);
  const accountRef = useRef(null);
  const notifRef = useRef(null);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setShowAccountDropdown(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  // Filtrado en tiempo real de usuarios
  const searchResults = searchTerm.trim()
    ? usersList.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (u.role && u.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (u.location && u.location.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  const requestsReceivedCount = currentUser.requestsReceived ? currentUser.requestsReceived.length : 0;
  const totalNotifs = notificationsList.length + requestsReceivedCount;

  return (
    <>
      {/* Barra de navegación superior fija */}
      <header className="w3-top" style={{ zIndex: 9000, overflow: 'visible' }}>
        <div
          className="w3-bar w3-theme-d2 w3-left-align w3-large"
          style={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'visible',
            position: 'relative',
            padding: '0 8px'
          }}
        >
          {/* Botón hamburguesa móvil */}
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={toggleNav}
            aria-label="Abrir menú de navegación"
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Logo / Inicio */}
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
            style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
            title="PochecheBook - Inicio"
          >
            <img
              src="/logo1.png"
              alt="PochecheBook"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'contain',
                backgroundColor: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.85)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            />
            <span style={{ fontSize: '1.15rem', letterSpacing: '0.4px', fontWeight: 700 }}>PochecheBook</span>
          </a>

          {/* Buscador de personas en tiempo real (Con overflow visible garantizado) */}
          <div
            ref={searchContainerRef}
            style={{
              position: 'relative',
              margin: '0 12px',
              flex: '0 1 360px',
              overflow: 'visible'
            }}
          >
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="🔍 Buscar personas, amigos..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w3-input w3-round-xxlarge"
                style={{
                  padding: '7px 32px 7px 16px',
                  fontSize: '13px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  outline: 'none',
                  color: '#050505',
                  width: '100%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setShowSearchDropdown(false);
                  }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#65676b',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa fa-times"></i>
                </button>
              )}
            </div>

            {/* Desplegable de resultados garantizado sin recortes de overflow */}
            {showSearchDropdown && searchTerm.trim() && (
              <div
                style={{
                  position: 'absolute',
                  top: '42px',
                  left: 0,
                  width: '100%',
                  minWidth: '340px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.25)',
                  borderRadius: '10px',
                  zIndex: 99999,
                  maxHeight: '360px',
                  overflowY: 'auto',
                  border: '1px solid #ced0d4',
                  animation: 'fbFadeIn 0.15s ease'
                }}
              >
                <div style={{ padding: '8px 14px', fontSize: '12px', fontWeight: 700, color: '#65676b', borderBottom: '1px solid #f0f2f5' }}>
                  Resultados para "{searchTerm}" ({searchResults.length})
                </div>

                {searchResults.length === 0 ? (
                  <div style={{ padding: '20px 14px', textAlign: 'center', color: '#65676b', fontSize: '13px' }}>
                    <i className="fa fa-user-times" style={{ fontSize: '24px', marginBottom: '6px', display: 'block' }}></i>
                    No se encontraron usuarios con ese nombre.
                  </div>
                ) : (
                  searchResults.map((user) => {
                    const isCurrent = user.id === currentUser.id;
                    const isFriend = (currentUser.friends || []).includes(user.id);
                    const isRequestSent = (currentUser.requestsSent || []).includes(user.id);

                    return (
                      <div
                        key={user.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderBottom: '1px solid #f0f2f5',
                          transition: 'background 0.15s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f7f8fa'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
                          <img
                            src={user.avatar}
                            alt={user.name}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              objectFit: 'cover'
                            }}
                          />
                          <div style={{ minWidth: 0 }}>
                            <strong style={{
                              fontSize: '14px',
                              color: '#050505',
                              display: 'block',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {user.name}
                            </strong>
                            <span style={{
                              fontSize: '12px',
                              color: '#65676b',
                              display: 'block',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {user.role} · {user.location}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginLeft: '8px' }}>
                          {isCurrent ? (
                            <span style={{ fontSize: '12px', color: '#1877f2', fontWeight: 700 }}>(Tú)</span>
                          ) : isFriend ? (
                            <span className="w3-tag w3-green w3-round w3-small" style={{ fontWeight: 600 }}>
                              ✓ Amigos
                            </span>
                          ) : isRequestSent ? (
                            <span className="w3-tag w3-light-grey w3-round w3-small" style={{ color: '#65676b' }}>
                              Enviada
                            </span>
                          ) : (
                            <button
                              type="button"
                              className="w3-button w3-small w3-blue w3-round"
                              onClick={() => sendFriendRequest(user.id)}
                              style={{ fontWeight: 600, padding: '4px 10px' }}
                            >
                              <i className="fa fa-user-plus"></i> Agregar
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          <div style={{ flex: 1 }}></div>

          {/* Iconos de Navegación */}
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Noticias">
            <i className="fa fa-globe"></i>
          </a>

          {/* Menú de Notificaciones */}
          <div ref={notifRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setShowNotifDropdown(prev => !prev)}
              className="w3-button w3-padding-large w3-hover-white"
              title="Notificaciones"
              style={{ position: 'relative' }}
            >
              <i className="fa fa-bell"></i>
              {totalNotifs > 0 && (
                <span
                  className="w3-badge w3-small w3-green"
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '6px',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}
                >
                  {totalNotifs}
                </span>
              )}
            </button>

            {showNotifDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '52px',
                  right: 0,
                  width: '320px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.22)',
                  borderRadius: '10px',
                  zIndex: 99999,
                  border: '1px solid #e4e6eb',
                  overflow: 'hidden'
                }}
              >
                <div style={{ padding: '12px 16px', fontWeight: 'bold', borderBottom: '1px solid #eee', fontSize: '15px', color: '#050505' }}>
                  Notificaciones
                </div>
                {requestsReceivedCount > 0 && (
                  <a
                    href="#solicitudes"
                    onClick={() => setShowNotifDropdown(false)}
                    className="w3-bar-item w3-button w3-pale-yellow"
                    style={{ fontSize: '13px', padding: '12px 16px', display: 'block', textDecoration: 'none' }}
                  >
                    <i className="fa fa-user-plus w3-text-blue"></i> Tienes <strong>{requestsReceivedCount}</strong> solicitud(es) de amistad pendiente(s).
                  </a>
                )}
                {notificationsList.map((notif, index) => (
                  <div key={index} style={{ padding: '12px 16px', borderBottom: '1px solid #f0f2f5', fontSize: '13px', color: '#050505' }}>
                    <i className="fa fa-circle w3-text-blue" style={{ fontSize: '8px', marginRight: '8px' }}></i>
                    {notif}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Menú de Mi Cuenta y Cerrar Sesión */}
          <div ref={accountRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setShowAccountDropdown(prev => !prev)}
              className="w3-button w3-padding-large w3-hover-white"
              title="Mi Cuenta"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <img
                src={currentUser.avatar}
                className="w3-circle"
                style={{ height: '28px', width: '28px', objectFit: 'cover' }}
                alt="Avatar"
              />
              <span className="w3-hide-small" style={{ fontSize: '14px', fontWeight: 600 }}>
                {currentUser.name.split(' ')[0]}
              </span>
              <i className="fa fa-caret-down" style={{ fontSize: '12px' }}></i>
            </button>

            {showAccountDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '52px',
                  right: 0,
                  width: '240px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.22)',
                  borderRadius: '10px',
                  zIndex: 99999,
                  border: '1px solid #e4e6eb',
                  overflow: 'hidden'
                }}
              >
                <div style={{ padding: '14px', borderBottom: '1px solid #f0f2f5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src={currentUser.avatar}
                    style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                    alt="Perfil"
                  />
                  <div>
                    <strong style={{ fontSize: '14px', color: '#050505', display: 'block' }}>{currentUser.name}</strong>
                    <span style={{ fontSize: '12px', color: '#65676b' }}>{currentUser.role}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setShowAccountDropdown(false);
                    logout();
                  }}
                  className="w3-bar-item w3-button w3-hover-pale-red"
                  style={{
                    color: '#e41e3f',
                    fontWeight: 600,
                    fontSize: '14px',
                    textAlign: 'left',
                    width: '100%',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <i className="fa fa-sign-out"></i>
                  <span>Cerrar sesión</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Menú de navegación en pantallas pequeñas */}
      <div
        id="navDemo"
        className={`w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large ${
          isNavOpen ? 'w3-show' : ''
        }`}
        style={{ marginTop: '51px' }}
      >
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Inicio</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Mi Perfil ({currentUser.name})</a>
        <button
          type="button"
          onClick={logout}
          className="w3-bar-item w3-button w3-padding-large"
          style={{ color: '#ffb3b3', textAlign: 'left', width: '100%' }}
        >
          <i className="fa fa-sign-out"></i> Cerrar sesión
        </button>
      </div>
    </>
  );
}
