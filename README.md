# Red Social en React

Este proyecto es una migración completa y modular a **React** de la plantilla de red social original basada en W3.CSS (`plantilla-RedSocial.html`).

## Características

- ⚡ **Vite + React 18**: Configuración rápida, ligera y moderna.
- 🎨 **Fidelidad Visual Total**: Mantiene la paleta de colores, diseño responsive y estilos originales de W3.CSS y FontAwesome.
- 🧩 **Arquitectura Modular de Componentes**:
  - `Navbar`: Barra de navegación superior con menú responsive colapsable y dropdown de notificaciones.
  - `LeftSidebar`:
    - `ProfileCard`: Tarjeta del perfil de usuario.
    - `AccordionMenu`: Acordeón interactivo (Grupos, Eventos, Fotos).
    - `InterestsCard`: Etiquetas de intereses con estilos temáticos.
    - `AlertNotice`: Alerta descartable con botón de cierre.
  - `Feed`:
    - `CreatePost`: Caja para redactar y publicar estados en vivo.
    - `PostCard`: Publicaciones individuales con soporte para imágenes, Likes interactivos y comentarios.
  - `RightSidebar`:
    - `UpcomingEvents`: Próximos eventos con botón interactivo de información.
    - `FriendRequest`: Solicitudes de amistad con botones para aceptar o declinar.
    - `AdsCard`: Espacios para publicidad / widgets.
  - `Footer`: Pie de página informativo.

---

## Cómo ejecutar el proyecto

### 1. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL que indique la consola (normalmente `http://localhost:5173`).

### 2. Compilar para producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

### 3. Previsualizar la compilación de producción
```bash
npm run preview
```
