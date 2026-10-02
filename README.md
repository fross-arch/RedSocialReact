# 📱 PochecheBook - Red Social en React (Estilo Facebook con Hooks & Enrutamiento)

**PochecheBook** es una aplicación web completa, modular y responsiva construida con **React 18** y **Vite**, inspirada en la interfaz oficial de **Facebook**, implementando arquitectura basada en **React Hooks (`useState`, `useEffect`, `useContext`)**, enrutamiento cliente con **React Router** (*Nota 4.5*), control estricto de **Rutas Restringidas** con pantalla de acceso denegado y privacidad de amistades (*Nota 5.0*).

---

## 🎯 Cumplimiento de la Rúbrica de Evaluación

| Criterio / Nota | Requisito de la Guía | Implementación en el Proyecto |
| :--- | :--- | :--- |
| **3.5** | **Conceptos de Hooks y Vídeos** | • Uso de `useState` para publicaciones, sesión, modales y formularios.<br>• Uso de `useEffect` para persistencia en `localStorage`, limpieza de timers y listener de teclado.<br>• Uso de `useContext` (`SocialContext`) para estado global sin prop-drilling.<br>• Soporte nativo para publicaciones con vídeo HTML5 (`<video controls>`). |
| **4.0** | **Diseño Idéntico a un Post de Facebook** | • Cabecera con avatar circular (44px), autor en negrita, icono de globo terráqueo (🌐) y menú de 3 puntos.<br>• Barra de reacciones oficial de Facebook con iconos superpuestos (👍 Me gusta azul, ❤️ Me encanta rojo, 😆 Me divierte amarillo).<br>• Botones de acción "Me gusta", "Comentar" y "Compartir" con estilos e iluminación azul Facebook.<br>• Sección de comentarios con burbujas redondeadas gris claro (`#f0f2f5`). |
| **4.5** | **Agregar Rutas a las Páginas de la RedSocial** | • Integración completa de las páginas de `Paginas RedSocial_app`: **Inicio / Feed** (`/`), **Perfil** (`/perfil`), **Mensajes / Chat** (`/mensajes`), **Grupos** (`/grupos`), **Configuración** (`/configuracion`), **Login** (`/login`) y **Registro** (`/registro`).<br>• Enrutamiento declarativo SPA con `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`).<br>• Navegación fluida e instantánea en Navbar superior y menú móvil sin recarga de navegador. |
| **5.0** | **Crear Rutas Restringidas (Protegidas) y Privacidad de Amigos** | • Guardián `<ProtectedRoute>` que intercepta accesos no autenticados a `/`, `/perfil`, `/mensajes`, `/grupos` y `/configuracion`.<br>• Pantalla de **"Acceso Incorrecto: no puedes ver esta página"** (`AccessDeniedPage`) con botón directo para **Iniciar Sesión** (`/login`).<br>• Guardián `<PublicOnlyRoute>` que redirige a `/` si un usuario autenticado intenta acceder a `/login` o `/registro`.<br>• **Privacidad estricta de amigos**: Los usuarios que no sean amigos confirmados (como Juana de Arco mientras esté en solicitud pendiente) no pueden publicar ni comentar en el feed del usuario, ni el usuario ve sus posts o comentarios hasta aceptar su solicitud.<br>• Responder comentarios anidados, likes independientes en posts/comentarios y compartir publicaciones. |

---

## 🌟 Páginas y Funcionalidades Implementadas

- 🏠 **Feed Principal (`/`)**: Muro de publicaciones estilo Facebook con creación de posts multimedia, likes, comentarios, respuestas y eliminación. Margen superior calibrado para evitar recortes con la barra fija.
- 👤 **Página de Perfil (`/perfil`)**: Portada personalizable (subir desde PC o muestras), biografía, detalles personales, fotos ampliables y pestañas siempre visibles (*Publicaciones, Información, Amigos, Fotos*).
- 💬 **Mensajes y Chat Bidireccional (`/mensajes`)**: Alertas en la campana de notificaciones e insignia animada en el icono de mensajes al recibir chats nuevos, selector de réplica para simular respuestas de amigos y auto-scroll.
- 👥 **Directorio de Grupos (`/grupos`)**: Diseño espacioso y moderno con separación visual clara, buscador en vivo, lista de comunidades y creación rápida de nuevos grupos.
- ⚙️ **Configuración de Cuenta (`/configuracion`)**: Actualización de información, notificaciones y cambio seguro de contraseña (con confirmación privada sin exponer la clave).
- 🔐 **Iniciar Sesión con Verificación Estricta (`/login`)**: Validación de credenciales contra `localStorage`, rechazo de contraseñas incorrectas y banner de seguridad limpio sin exponer contraseñas.
- 📝 **Crear Cuenta (`/registro`)**: Registro completo con foto de perfil desde el PC o avatares oficiales (`logo1.png`), fecha de nacimiento y contraseña cifrada/almacenada.
- 🚫 **Pantalla de Acceso Incorrecto (`AccessDeniedPage`)**: Interfaz visual amigable y clara cuando un usuario no autenticado intenta acceder a una ruta privada, con botón directo de redirección al login.
- 🛡️ **Privacidad de Amigos Reactiva**: Juana de Arco está inicialmente en estado de solicitud pendiente. Sus publicaciones y comentarios no aparecen en el Feed ni en el Chat hasta que el usuario presione "Aceptar" en la tarjeta de solicitudes.
- 🔔 **Notificaciones de Alto Contraste**: Desplegable de notificaciones con texto permanente en color negro `#050505` y fondo legible que nunca hace desaparecer las letras.
- 🔍 **Visor de Fotos en Pantalla Completa (Lightbox)**: Al hacer clic en cualquier imagen publicada o de perfil, se abre en alta definición con tecla `Escape`.

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
│   ├── App.jsx                    # Componente raíz con rutas declarativas y toast
│   ├── App.css                    # Estilos del layout espacioso (Grid / Flexbox / Selecciones)
│   ├── context/
│   │   └── SocialContext.jsx      # Contexto Global (Auth, Posts, Amigos, Lightbox)
│   ├── utils/
│   │   └── idGenerator.js         # Generador de UUIDs inmutables
│   ├── data/
│   │   └── initialData.js         # Datos iniciales (usuarios, posts con vídeo, fotos)
│   ├── pages/                     # Páginas de la RedSocial (Rutas Nota 4.5)
│   │   ├── FeedPage.jsx           # Ruta / (Inicio y Feed)
│   │   ├── ProfilePage.jsx        # Ruta /perfil (Perfil del usuario)
│   │   ├── ChatPage.jsx           # Ruta /mensajes (Chat interactivo)
│   │   ├── GroupsPage.jsx         # Ruta /grupos (Grupos y comunidades)
│   │   ├── SettingsPage.jsx       # Ruta /configuracion (Ajustes de cuenta)
│   │   ├── LoginPage.jsx          # Ruta /login (Iniciar sesión)
│   │   ├── RegisterPage.jsx       # Ruta /registro (Crear cuenta)
│   │   ├── AccessDeniedPage.jsx   # Pantalla de acceso incorrecto / ruta restringida
│   │   └── NotFoundPage.jsx       # Ruta * (404 no encontrada)
│   └── components/
│       ├── Auth/
│       │   ├── ProtectedRoute.jsx # Guardián de Rutas Restringidas (Nota 5.0)
│       │   ├── PublicOnlyRoute.jsx # Guardián de Rutas Públicas
│       │   └── LoginScreen.jsx    # Componente modal de acceso rápido
│       ├── Feed/
│       │   ├── Feed.jsx           # Columna central del feed con filtrado por amistad
│       │   ├── CreatePost.jsx     # Creador de posts interactivo (local/muestras)
│       │   ├── PostCard.jsx       # Tarjeta estilo Facebook con comentarios y respuestas filtradas
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
│       │   ├── SearchFriendsCard.jsx # Buscador de personas y estado de solicitudes
│       │   └── AdsCard.jsx        # Widgets adicionales / Comunidad
│       ├── Navbar.jsx             # Barra superior con NavLink, Perfil fijo en blanco y buscador
│       └── Footer.jsx             # Pie de página temático
```

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (`useState`, `useEffect`, `useContext`, `createContext`, `useRef`)
- **React Router 6** (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useNavigate`, `useLocation`)
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

## 👥 Diseñado por (Autores del Proyecto)

- **Bryan Rafael Mendoza**
- **Sebastián Gonzales**
- **Mariana Rico**
- **Yadir Morales**

---

## 📤 Comandos para Subir a Git (GitHub)

```bash
git add .
git commit -m "PochecheBook: Portada ampliable, logo a inicio, borrar notificaciones y creditos de autores"
git push origin main
```

