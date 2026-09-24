export const defaultUsers = [
  {
    id: "user-1",
    name: "Mi Perfil",
    username: "miperfil",
    avatar: "https://www.w3schools.com/w3images/avatar3.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar3.png",
    role: "Diseñador, UI",
    location: "Londres, Reino Unido",
    birthDate: "1 de abril de 1988",
    friends: ["user-2"],
    requestsSent: [],
    requestsReceived: ["user-3"]
  },
  {
    id: "user-2",
    name: "Juan Pérez",
    username: "juanperez",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar2.png",
    role: "Fotógrafo & Viajero",
    location: "Madrid, España",
    birthDate: "15 de mayo de 1990",
    friends: ["user-1"],
    requestsSent: [],
    requestsReceived: []
  },
  {
    id: "user-3",
    name: "Juana de Arco",
    username: "juanadearco",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar5.png",
    role: "Ingeniera de Software",
    location: "París, Francia",
    birthDate: "6 de enero de 1994",
    friends: [],
    requestsSent: ["user-1"],
    requestsReceived: []
  },
  {
    id: "user-4",
    name: "Angie López",
    username: "angielopez",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar6.png",
    role: "Diseñadora Gráfica",
    location: "Bogotá, Colombia",
    birthDate: "22 de septiembre de 1992",
    friends: [],
    requestsSent: [],
    requestsReceived: []
  },
  {
    id: "user-5",
    name: "Carlos Mendoza",
    username: "carlosm",
    avatar: "https://www.w3schools.com/w3images/avatar4.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar4.png",
    role: "Desarrollador Full Stack",
    location: "Buenos Aires, Argentina",
    birthDate: "10 de noviembre de 1995",
    friends: [],
    requestsSent: [],
    requestsReceived: []
  },
  {
    id: "user-6",
    name: "Sofía Gómez",
    username: "sofiag",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar5.png",
    role: "Especialista en Marketing Digital",
    location: "Ciudad de México, México",
    birthDate: "14 de julio de 1996",
    friends: [],
    requestsSent: [],
    requestsReceived: []
  },
  {
    id: "user-7",
    name: "Mateo Rodríguez",
    username: "mateor",
    avatar: "https://www.w3schools.com/w3images/avatar1.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar1.png",
    role: "Diseñador UX/UI",
    location: "Medellín, Colombia",
    birthDate: "3 de marzo de 1993",
    friends: [],
    requestsSent: [],
    requestsReceived: []
  },
  {
    id: "user-8",
    name: "Valentina Morales",
    username: "valentinam",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    currentUserAvatar: "https://www.w3schools.com/w3images/avatar6.png",
    role: "Community Manager & Redes",
    location: "Santiago, Chile",
    birthDate: "28 de agosto de 1997",
    friends: [],
    requestsSent: [],
    requestsReceived: []
  }
];

export const userProfile = defaultUsers[0];

export const photoGallery = [
  "/pochechebook.jpg",
  "/logo1.png",
  "https://www.w3schools.com/w3images/lights.jpg",
  "https://www.w3schools.com/w3images/nature.jpg",
  "https://www.w3schools.com/w3images/mountains.jpg",
  "https://www.w3schools.com/w3images/forest.jpg"
];

export const sampleVideos = [
  {
    id: "v1",
    title: "Naturaleza y Paisajes",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://www.w3schools.com/w3images/nature.jpg"
  },
  {
    id: "v2",
    title: "Tecnología y Futuro",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://www.w3schools.com/w3images/lights.jpg"
  }
];

export const interestsList = [
  { id: 1, label: "PochecheBook", badgeClass: "w3-theme-d5" },
  { id: 2, label: "Noticias", badgeClass: "w3-theme-d4" },
  { id: 3, label: "Tecnología", badgeClass: "w3-theme-d3" },
  { id: 4, label: "Juegos", badgeClass: "w3-theme-d2" },
  { id: 5, label: "Amigos", badgeClass: "w3-theme-d1" },
  { id: 6, label: "Comunidad", badgeClass: "w3-theme" },
  { id: 7, label: "Diseño UI", badgeClass: "w3-theme-l1" },
  { id: 8, label: "Fotografía", badgeClass: "w3-theme-l2" },
  { id: 9, label: "Música", badgeClass: "w3-theme-l3" },
  { id: 10, label: "Arte", badgeClass: "w3-theme-l4" },
  { id: 11, label: "React", badgeClass: "w3-theme-l5" }
];

export const initialPosts = [
  {
    id: "post-pocheche-welcome",
    author: "PochecheBook Oficial",
    avatar: "/logo1.png",
    time: "Hace 5 min",
    heading: "🎉 ¡Bienvenidos a PochecheBook! 🚀📖",
    content: "¡Estamos emocionados de darles la bienvenida a PochecheBook! Una plataforma diseñada para conectar personas, compartir tus mejores momentos, fotografías en alta resolución, vídeos y debatir en comunidad. ¡Explora, reacciona y comparte con todos!",
    images: [
      "/pochechebook.jpg",
      "/logo1.png"
    ],
    video: null,
    likes: 48,
    isLiked: true,
    sharesCount: 16,
    isShared: false,
    comments: [
      {
        id: "comm-pocheche-1",
        author: "Juan Pérez",
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
        time: "Hace 3 min",
        content: "¡Excelente diseño y experiencia de usuario! Bienvenidos a todos a PochecheBook 👏",
        likes: 9,
        isLiked: true,
        replies: [
          {
            id: "reply-pocheche-1-1",
            author: "Juana de Arco",
            avatar: "https://www.w3schools.com/w3images/avatar5.png",
            time: "Hace 1 min",
            content: "¡Me fascina la fluidez y cómo se aprecian las fotos en el visor! Gran trabajo del equipo.",
            likes: 5,
            isLiked: true
          }
        ]
      }
    ]
  },
  {
    id: "post-init-1",
    author: "Juan Pérez",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    time: "Hace 25 min",
    content: "¡Hola a todos en PochecheBook! Comparto algunas fotografías de mi última excursión a las auroras boreales. ¡La naturaleza nos regala vistas increíbles!",
    images: [
      "https://www.w3schools.com/w3images/lights.jpg",
      "https://www.w3schools.com/w3images/nature.jpg"
    ],
    video: null,
    likes: 14,
    isLiked: false,
    sharesCount: 3,
    isShared: false,
    comments: [
      {
        id: "comm-1-1",
        author: "Juana de Arco",
        avatar: "https://www.w3schools.com/w3images/avatar5.png",
        time: "Hace 10 min",
        content: "¡Qué fotos tan espectaculares! Me encantaría visitar ese lugar pronto.",
        likes: 3,
        isLiked: false,
        replies: [
          {
            id: "reply-1-1-1",
            author: "Juan Pérez",
            avatar: "https://www.w3schools.com/w3images/avatar2.png",
            time: "Hace 5 min",
            content: "¡Totalmente recomendado Juana! Te paso las coordenadas por mensaje.",
            likes: 1,
            isLiked: false
          }
        ]
      }
    ]
  },
  {
    id: "post-init-2",
    author: "Juana de Arco",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    time: "Hace 45 min",
    content: "🎥 Les comparto este vídeo en alta definición sobre paisajes naturales. ¡Miren los detalles y el movimiento del fuego y la naturaleza!",
    images: [],
    video: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://www.w3schools.com/w3images/nature.jpg"
    },
    likes: 27,
    isLiked: false,
    sharesCount: 8,
    isShared: false,
    comments: [
      {
        id: "comm-2-1",
        author: "Angie López",
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        time: "Hace 20 min",
        content: "La calidad del vídeo es impresionante 👏 ¡Gracias por compartir!",
        likes: 2,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "post-init-3",
    author: "Angie López",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    time: "Hace 2 horas",
    heading: "¿Han visto esto?",
    content: "La tranquilidad del bosque siempre ayuda a renovar energías. Les deseo a todos en PochecheBook una excelente semana llena de éxitos y nuevos aprendizajes.",
    images: [
      "https://www.w3schools.com/w3images/forest.jpg"
    ],
    video: null,
    likes: 8,
    isLiked: false,
    sharesCount: 1,
    isShared: false,
    comments: []
  }
];

export const upcomingEvent = {
  title: "Lanzamiento PochecheBook",
  time: "Viernes 18:00",
  image: "/logo1.png"
};

export const initialFriendRequests = [
  {
    id: 1,
    name: "Juana de Arco",
    avatar: "https://www.w3schools.com/w3images/avatar6.png"
  }
];

export const notificationsList = [
  "Una nueva solicitud de amistad",
  "Juan Pérez publicó en tu muro",
  "A Juana le gusta tu publicación"
];
