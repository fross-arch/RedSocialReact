import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { useSocial } from '../../context/SocialContext';
import './FacebookPost.css';

export default function Feed() {
  const { posts, toastMessage, resetPostsToDefault } = useSocial();

  return (
    <section className="feed-col">
      {/* Toast de Notificación flotante (ej. al compartir o publicar) */}
      {toastMessage && (
        <div className="fb-toast">
          <i className="fa fa-check-circle" style={{ color: '#42b72a', fontSize: '18px' }}></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Creador de Publicación estilo Facebook */}
      <CreatePost />

      {/* Lista de Publicaciones con keys únicas inmutables */}
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <div className="fb-card" style={{ padding: '30px', textAlign: 'center', color: '#65676b' }}>
          <i className="fa fa-newspaper-o" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
          <p>No hay publicaciones disponibles en este momento.</p>
        </div>
      )}

      {/* Botón utilitario para pruebas / evaluación del profesor */}
      <div style={{ textAlign: 'center', margin: '20px 0 40px 0' }}>
        <button
          type="button"
          onClick={resetPostsToDefault}
          className="w3-button w3-small w3-white w3-border w3-round w3-text-grey"
          style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
          title="Restablece las publicaciones iniciales del ejercicio"
        >
          <i className="fa fa-refresh"></i> Restablecer publicaciones de muestra
        </button>
      </div>
    </section>
  );
}
