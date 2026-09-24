import React from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Feed from './components/Feed/Feed';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Footer from './components/Footer';
import ImageLightboxModal from './components/Feed/ImageLightboxModal';
import LoginScreen from './components/Auth/LoginScreen';
import { SocialProvider, useSocial } from './context/SocialContext';
import './App.css';

function MainAppContent() {
  const { isAuthenticated } = useSocial();

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Layout principal espacioso de 3 columnas con CSS Grid */}
      <main className="main-layout-container" style={{ flex: 1 }}>
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </main>

      <Footer />

      {/* Modal visor de fotos en pantalla completa */}
      <ImageLightboxModal />
    </div>
  );
}

export default function App() {
  return (
    <SocialProvider>
      <MainAppContent />
    </SocialProvider>
  );
}
