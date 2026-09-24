# Walkthrough: PochecheBook en React con Hooks y Diseño Facebook (Nota 5.0)

Este documento detalla la solución completa a los 4 puntos de la rúbrica para obtener la calificación máxima (**5.0**), incluyendo identidad de marca oficial **PochecheBook**, registro permanente de usuarios, buscador de amigos interactivo, edición de perfil y diseño Facebook.

---

## 🔧 Correcciones y Mejoras Recientes Aplicadas

1. **💾 Registro de Usuarios con Persistencia Total**:
   - En la pantalla de login se incorporó la pestaña **"Crear Cuenta"**.
   - Permite ingresar nombre completo, profesión, ubicación, fecha de nacimiento y subir una foto de perfil desde el PC con `FileReader` (Base64) o elegir el logo oficial.
   - El usuario registrado se inserta en `usersList` y se persiste en `localStorage` (`pochechebook_users_v1`).
   - Al cerrar sesión, la nueva cuenta creada aparece disponible en la lista de cuentas de acceso rápido.
2. **🔎 Corrección Integral del Buscador de Amigos**:
   - **Causa del error previo**: La clase `.w3-bar` de W3.CSS tiene por defecto `overflow: hidden`, lo que recortaba e impedía que el menú flotante de resultados de búsqueda se viera en pantalla.
   - **Solución**: Se sobrescribió `overflow: visible` con `z-index: 99999`, permitiendo que el desplegable aparezca con total nitidez.
   - **Buscador dual**: Ahora se puede buscar tanto desde la barra de navegación superior (con autocompletado en tiempo real) como desde el nuevo panel lateral **"Conectar con Personas"** en la columna derecha.
   - Cada usuario encontrado muestra su avatar, nombre, rol y el botón **"+ Agregar"** que envía la solicitud en tiempo real.

---

## 🎯 Cumplimiento de los 4 Criterios de Evaluación

### 1. Conceptos de los Hooks y Soporte de Vídeos (Nota 3.5)
- **`useState`**: Manejo de publicaciones, usuarios registrados, usuario activo, sesión, entradas de texto, notificaciones y modales.
- **`useEffect`**: Persistencia automática en `localStorage` (posts, usuarios y sesión). Limpieza de temporizadores Toast y cierre con tecla `Escape`.
- **`useContext` (`SocialContext`)**: Contexto Global que encapsula toda la lógica de negocio (login, registro, perfil, posts, comentarios, amigos) y evita el *prop-drilling*.
- **Soporte de Vídeos**: Soporte nativo de etiquetas `<video controls>` HTML5 con reproductor responsivo.

### 2. Diseño Idéntico a un Post de Facebook (Nota 4.0)
- Cabecera con avatar circular de 44px, autor en negrita, globo terráqueo (🌐) y menú de 3 puntos.
- Barra de reacciones superpuestas (👍 Me gusta azul, ❤️ Me encanta rojo, 😆 Me divierte amarillo).
- Botones de acción con hover gris e iluminación azul Facebook.
- Burbujas de comentarios redondeadas (`border-radius: 18px`).

### 3. Corrección del Error del ID del Post del Video Tutorial (Nota 4.5)
- Utilidad `src/utils/idGenerator.js` con `crypto.randomUUID()` inmutable. Todas las búsquedas en el estado se realizan mediante coincidencia estricta por ID único (`post.id === postId`), eliminando colisiones.

### 4. Responder Comentarios, Likes y Compartir (Nota 5.0)
- Respuestas anidadas e indentadas con enlace *"Responder"*.
- Likes interactivos con contador en publicaciones, comentarios y respuestas.
- Clonación de posts en el muro del usuario con el botón *"Compartir"*.

---

## 💻 Instrucciones para Probar

1. En la terminal de VS Code ejecuta:
   ```bash
   npm run dev
   ```
2. **Probar el Registro**:
   - Cierra sesión desde el menú de la esquina superior derecha.
   - Selecciona la pestaña **"Crear Cuenta"**, llena los datos y haz clic en **"Registrarme y Entrar"**.
   - Tu cuenta se creará, iniciará sesión automáticamente y podrás publicar con tu propio nombre y foto.
   - Si cierras sesión, verás tu nueva cuenta guardada en la lista.
3. **Probar el Buscador de Amigos**:
   - En la barra superior escribe "Juan", "Juana", "Carlos", "Sofia", o busca desde la tarjeta **"Conectar con Personas"** de la columna derecha.
   - Haz clic en **"+ Agregar"** para enviar la solicitud de amistad.
