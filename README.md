# 📱 PochecheBook - Red Social en React (Estilo Facebook con Hooks)

**PochecheBook** es una aplicación web completa, modular y responsiva construida con **React 18** y **Vite**, inspirada en la interfaz oficial de **Facebook**, implementando arquitectura basada en **React Hooks (`useState`, `useEffect`, `useContext`)** y cumpliendo con la rúbrica de evaluación para la calificación máxima (**5.0**).

---

## 🎯 Cumplimiento de la Rúbrica de Evaluación

| Criterio / Nota | Requisito de la Guía | Implementación en el Proyecto |
| :--- | :--- | :--- |
| **3.5** | **Conceptos de Hooks y Vídeos** | • Uso de `useState` para publicaciones, sesión, modales y formularios.<br>• Uso de `useEffect` para persistencia en `localStorage`, limpieza de timers y listener de teclado.<br>• Uso de `useContext` (`SocialContext`) para estado global sin prop-drilling.<br>• Soporte nativo para publicaciones con vídeo HTML5 (`<video controls>`). |
| **4.0** | **Diseño Idéntico a un Post de Facebook** | • Cabecera con avatar circular (44px), autor en negrita, icono de globo terráqueo (🌐) y menú de 3 puntos.<br>• Barra de reacciones oficial de Facebook con iconos superpuestos (👍 Me gusta azul, ❤️ Me encanta rojo, 😆 Me divierte amarillo).<br>• Botones de acción "Me gusta", "Comentar" y "Compartir" con estilos e iluminación azul Facebook.<br>• Sección de comentarios con burbujas redondeadas gris claro (`#f0f2f5`). |
| **4.5** | **Corrección del Error de ID del Post del Vídeo** | • Explicación y resolución del error clásico de tutoriales donde se usaba `posts.length + 1` o índices de array.<br>• Creación de `src/utils/idGenerator.js` con `crypto.randomUUID()` inmutable.<br>• Identificadores 100% únicos y estables que eliminan el warning de consola `Encountered two children with the same key`. |
| **5.0** | **Responder Comentarios, Likes y Compartir** | • **Responder**: Enlace interactivo en cada comentario con respuestas anidadas e indentadas.<br>• **Likes**: Likes independientes con contador en posts, comentarios (insignia flotante 👍) y respuestas.<br>• **Compartir**: Clona el post en el muro del usuario mostrando el marco del autor original y suma el contador de compartidos. |

---

## 🌟 Funcionalidades Avanzadas Implementadas

- ✏️ **Edición de Perfil y Cambio de Foto**: Botón en la tarjeta de perfil para cambiar foto (desde tu PC, cámara o galería) y actualizar nombre, rol, ubicación y fecha de nacimiento con persistencia.
- 🔐 **Simulación de Login / Logout**: Pantalla de bienvenida estilo Facebook para iniciar sesión en 1 clic con cuentas de prueba (*Juan Pérez, Juana de Arco, Angie López, Carlos Mendoza*) o con nombre propio, y botón "Cerrar sesión" en el Navbar.
- 🔎 **Buscador de Usuarios en Tiempo Real**: Barra de búsqueda en la cabecera para filtrar personas en vivo y conocer su estado de amistad.
- 🤝 **Enviar y Gestionar Solicitudes de Amistad**: Botón para agregar amigos desde la búsqueda y tarjeta en la columna derecha para Aceptar o Rechazar solicitudes recibidas.
- 🗑️ **Eliminar Publicaciones**: Menú desplegable en los 3 puntos (`...`) de cada post para eliminar publicaciones con confirmación.
- 🔍 **Visor de Fotos en Pantalla Completa (Lightbox)**: Al hacer clic en cualquier imagen publicada o en la galería del perfil, se abre un visor modal en alta definición con fondo oscuro y soporte para tecla `Escape`.
- 📁 **Subida de Archivos desde tu PC**: Creador de posts con soporte para adjuntar imágenes y vídeos locales (convertidos a Base64 con `FileReader` para persistir entre recargas) o seleccionar muestras de la galería.
- 🌿 **Diseño Espacioso con CSS Grid**: Separación limpia de 28px entre columnas y 24px entre publicaciones en el feed, eliminando el aspecto apretado.

---

## 📁 Estructura del Proyecto

```
RedSocialReact/
├── index.html                     # HTML base con fuentes y CDN temático
├── package.json                   # Dependencias de React y scripts de Vite
├── vite.config.js                 # Configuración de Vite con plugin React
├── README.md                      # Documentación del repositorio
├── WALKTHROUGH.md                 # Informe técnico detallado
├── WALKTHROUGH.html               # Versión web imprimible en PDF
├── src/
│   ├── main.jsx                   # Punto de entrada de ReactDOM
│   ├── App.jsx                    # Componente raíz con layout y control de autenticación
│   ├── App.css                    # Estilos del layout espacioso (Grid / Flexbox)
│   ├── context/
│   │   └── SocialContext.jsx      # Contexto Global (Auth, Posts, Amigos, Lightbox)
│   ├── utils/
│   │   └── idGenerator.js         # Generador de UUIDs inmutables
│   ├── data/
│   │   └── initialData.js         # Datos iniciales (usuarios, posts con vídeo, fotos)
│   └── components/
│       ├── Auth/
│       │   └── LoginScreen.jsx    # Pantalla de inicio de sesión con cuentas de prueba
│       ├── Feed/
│       │   ├── Feed.jsx           # Columna central del feed
│       │   ├── CreatePost.jsx     # Creador de posts interactivo (local/muestras)
│       │   ├── PostCard.jsx       # Tarjeta estilo Facebook con comentarios y respuestas
│       │   ├── ImageLightboxModal.jsx # Visor de fotos a pantalla completa
│       │   └── FacebookPost.css   # Estilos CSS de alta fidelidad estilo Facebook
│       ├── LeftSidebar/
│       │   ├── LeftSidebar.jsx    # Columna izquierda
│       │   ├── ProfileCard.jsx    # Tarjeta de perfil de usuario
│       │   ├── EditProfileModal.jsx # Modal para editar datos y foto de perfil
│       │   ├── AccordionMenu.jsx  # Acordeón interactivo (Grupos, Eventos, Fotos)
│       │   ├── InterestsCard.jsx  # Etiquetas de intereses
│       │   └── AlertNotice.jsx    # Alerta descartable
│       ├── RightSidebar/
│       │   ├── RightSidebar.jsx   # Columna derecha
│       │   ├── UpcomingEvents.jsx # Próximos eventos
│       │   ├── FriendRequest.jsx  # Solicitud de amistad dinámica (Aceptar/Rechazar)
│       │   └── AdsCard.jsx        # Widgets adicionales
│       ├── Navbar.jsx             # Barra superior con buscador en vivo y menú de cuenta
│       └── Footer.jsx             # Pie de página temático
```

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (`useState`, `useEffect`, `useContext`, `createContext`, `useRef`)
- **Vite 5** (Entorno de desarrollo y compilador ultra rápido)
- **JavaScript Moderno (ES6+)**
- **CSS3 / CSS Grid / Flexbox**
- **HTML5 Web APIs** (`FileReader`, `localStorage`, `crypto.randomUUID`)
- **FontAwesome 4.7 & Open Sans**

---

## 💻 Instrucciones de Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

---

## 📤 Comandos para Subir a Git (GitHub)

```bash
git add .
git commit -m "Entrega completa PochecheBook: Hooks, estilo Facebook, identidad de marca, edición de perfil, login, buscador y solicitudes"
git push origin main
```
