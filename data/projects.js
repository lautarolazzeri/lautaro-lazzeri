// Fuente única de datos para las tarjetas de /Projects y las páginas de detalle
// en /portfolio/[slug]. Para agregar un proyecto nuevo, solo hace falta un
// objeto más en este array.

export const projects = [
  {
    slug: "balnearioreta",
    title: "Balneario Reta Oficial",
    image: "/reta.png",
    liveUrl: "https://balnearioretaoficial.com.ar",
    sector: "Diseño y desarrollo web",
    stack: ["next", "css", "figma", "seo", "vercel"],
    description: [
      "Balneario Reta Oficial nació como un proyecto con el objetivo de potenciar la presencia digital de uno de los destinos más tranquilos y auténticos de la costa bonaerense. La propuesta fue crear una plataforma moderna que reuniera toda la información relevante para turistas y residentes en un solo lugar.",
      "Durante el desarrollo prioricé una experiencia de usuario simple e intuitiva, permitiendo acceder fácilmente a alojamientos, atractivos turísticos, gastronomía, eventos, servicios y contenido de interés. El diseño busca transmitir la identidad natural de Reta mediante una interfaz limpia, atractiva y fácil de navegar.",
      "El sitio fue desarrollado con un enfoque mobile-first, optimizado para SEO y rendimiento, garantizando tiempos de carga rápidos y una experiencia consistente en cualquier dispositivo. Además, incorpora un blog orientado al posicionamiento orgánico y herramientas pensadas para impulsar el turismo local y brindar mayor visibilidad a los prestadores de servicios de la localidad.",
    ],
  },
    {
    slug: "metodosilva",
    title: "Método Silva Argentina",
    image: "/metodosilva.png",
    liveUrl: "https://elmetodosilva.com.ar",
    sector: "Diseño y desarrollo web",
    stack: ["next", "css", "figma", "seo", "vercel"],
    description: [
      "El Método Silva es una plataforma desarrollada para comunicar de forma clara y profesional la propuesta de uno de los métodos de desarrollo personal más reconocidos a nivel mundial. El objetivo fue construir una presencia digital que transmitiera confianza, facilitara el acceso a la información y acompañara el proceso de inscripción a los cursos.",
      "Durante el desarrollo prioricé la accesibilidad y la experiencia de usuario, diseñando una interfaz intuitiva con una identidad visual alineada a la marca. La navegación fue pensada especialmente para un público amplio, con especial atención en la legibilidad, la simplicidad y la facilidad de uso en cualquier dispositivo.",
      "Además del desarrollo del sitio, implementé una estructura optimizada para SEO, una arquitectura escalable y un sistema de actualización de cursos que permite mantener el contenido siempre vigente. El resultado es una plataforma rápida, responsive y preparada para acompañar el crecimiento de la comunidad del Método Silva, facilitando tanto la difusión de sus cursos como la captación de nuevos participantes.",
    ],
  },
  {
    slug: "fisica",
    title: "Bot de Física 1",
    image: "/fisica.png",
    liveUrl: "https://fisicabotai.vercel.app",
    sector: "Proyecto académico",
    stack: ["next", "css", "vercel", "IA", "Prompt Engineering"],
    description: [
      "Física Bot AI es una aplicación desarrollada para facilitar el estudio de Física I mediante un asistente inteligente capaz de responder consultas, explicar conceptos y acompañar la resolución de ejercicios de manera clara e interactiva.",
      "El proyecto fue diseñado con el objetivo de centralizar en una única plataforma los contenidos más importantes de la materia, permitiendo consultar temas como cinemática, dinámica, trabajo y energía, impulso, cantidad de movimiento y otros conceptos fundamentales sin necesidad de recurrir a múltiples fuentes. La interfaz prioriza una experiencia limpia y libre de distracciones para que el foco esté puesto en el aprendizaje.",
      "A nivel técnico, la aplicación integra inteligencia artificial con un sistema de prompt engineering que restringe las respuestas exclusivamente a los contenidos de Física I, garantizando explicaciones coherentes con el programa de estudio. Además, incorpora soporte para fórmulas matemáticas, gráficos y simulaciones físicas interactivas, ofreciendo una herramienta de aprendizaje moderna, rápida y optimizada para cualquier dispositivo."
    ],
  },
  {
    slug: "seguridad-informatica",
    title: "Seguridad Informática",
    image: "/seguridadInformatica.png",
    liveUrl: "https://seguridad-itisjt.vercel.app",
    sector: "Proyecto académico",
    stack: ["html", "js", "css", "vercel"],
    extraLinks: [
      {
        label: "Jugar al quiz",
        href: "https://seguridad-itisjt.vercel.app/juego.html",
      },
    ],
    description: [
      "Este proyecto fue desarrollado como parte de un trabajo colaborativo para la materia de Seguridad Informática de la Escuela Técnica San Judas Tadeo, con el objetivo de crear una plataforma educativa que acercara los conceptos fundamentales de ciberseguridad de forma clara e interactiva.",
      "El sitio reúne información sobre las amenazas informáticas más comunes, como distintos tipos de malware, técnicas de ataque y buenas prácticas de prevención, organizando el contenido de manera sencilla para facilitar su comprensión. Como complemento, incorpora un juego de preguntas y respuestas que permite a los usuarios evaluar sus conocimientos mientras recorren la plataforma, convirtiendo el aprendizaje en una experiencia más dinámica.",
      "Desde el punto de vista técnico, fue desarrollado utilizando HTML, CSS y JavaScript puro, sin frameworks, lo que representó una excelente oportunidad para fortalecer las bases del desarrollo web. El proyecto se encuentra desplegado en Vercel y refleja el trabajo en equipo, la planificación y la aplicación de buenas prácticas de desarrollo en un entorno educativo.",
    ],
  },
  {
    slug: "pensandoia",
    title: "Pensando IA",
    image: "/pensandoia.png",
    liveUrl: "https://pensandoia.vercel.app/",
    sector: "Diseño y desarrollo web",
    stack: ["next", "css", "figma"],
    description: [
      "Pensando IA es una plataforma de contenido dedicada a la inteligencia artificial, creada con el propósito de acercar conceptos, tendencias y reflexiones sobre esta tecnología mediante una experiencia de lectura moderna, clara y agradable.",
      "El proyecto fue diseñado poniendo el foco en el contenido, priorizando una interfaz minimalista que reduzca las distracciones y favorezca una lectura cómoda tanto en dispositivos móviles como de escritorio. La arquitectura del sitio facilita la exploración de artículos y recursos, ofreciendo una navegación intuitiva y una experiencia centrada en el usuario.",
      "Además del desarrollo de la plataforma, se implementaron buenas prácticas de rendimiento, optimización para buscadores (SEO) y diseño responsive, permitiendo que el contenido sea accesible desde cualquier dispositivo y esté preparado para crecer con nuevas publicaciones y funcionalidades a medida que el proyecto evolucione."
    ],
  },
  {
    slug: "snowbros",
    title: "Snowbros",
    image: "/snowbros.png",
    liveUrl: null,
    sector: "Proyecto académico — Tecnología de programación",
    stack: ["java", "Patrones de diseño", "Clean Architecture", "Programación orientada a objetos"],
    description: [
      "Snow Bros Remake es una recreación del clásico videojuego arcade desarrollada como proyecto universitario para la materia Tecnología de la Programación, con el objetivo de aplicar conceptos de programación a través del desarrollo de un juego completo.",
      "El proyecto permitió trabajar sobre aspectos fundamentales del desarrollo de videojuegos, como la lógica de juego, detección de colisiones, gestión de estados, movimiento de personajes, interacción con enemigos y control de eventos, replicando la esencia del título original mediante una implementación propia.",
      "Además de representar un desafío técnico, este desarrollo fortaleció habilidades de resolución de problemas, organización del código y trabajo en equipo, demostrando la capacidad de trasladar conceptos teóricos a una aplicación interactiva y funcional con una experiencia de juego fluida."
    ],
  },
  {
    slug: "twodots",
    title: "Juego Two Dots",
    image: "/twodots.png",
    liveUrl: null,
    sector: "Proyecto académico — Lógica para Ciencias de la Computación",
    stack: ["next", "css", "Prolog", "Programación lógica", "Algoritmos"],
    description: [
      "Two Dots Clone es una recreación del popular juego de lógica desarrollada como proyecto universitario para poner en práctica conceptos avanzados de programación, algoritmos y desarrollo de aplicaciones interactivas.",
      "El proyecto consistió en implementar la mecánica principal del juego, permitiendo conectar puntos del mismo color sobre una grilla mediante reglas específicas. Durante el desarrollo se trabajó en la gestión de estados, detección de patrones, validación de movimientos, actualización dinámica del tablero y resolución de la lógica del juego, buscando replicar una experiencia fluida y fiel al funcionamiento original.",
      "Además de fortalecer conocimientos sobre estructuras de datos y algoritmos, este proyecto representó un desafío en el diseño de una arquitectura capaz de mantener la sincronización entre la lógica del juego y la interfaz, demostrando la aplicación práctica de conceptos de programación en el desarrollo de videojuegos y aplicaciones interactivas."
    ],
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    image: "/landing.jpg",
    liveUrl: "nextjs-website-lazzeri.netlify.app",
    sector: "Página web",
    stack: ["nextjs", "css", "javascript"],
    description: [
      "NextJS Website es una landing page desarrollada como proyecto de práctica para explorar conceptos de diseño web moderno, composición visual y desarrollo de interfaces utilizando tecnologías actuales.",
      "El objetivo principal fue experimentar con la creación de una página atractiva, responsive y optimizada, aplicando buenas prácticas de estructura, organización de componentes y experiencia de usuario. Durante el desarrollo se trabajó en la construcción de una interfaz limpia, con secciones dinámicas y una distribución visual pensada para lograr una navegación fluida.",
      "Este proyecto representó una oportunidad para profundizar en el desarrollo con Next.js, mejorar criterios de diseño frontend y aplicar técnicas de creación de sitios escalables, priorizando rendimiento, adaptabilidad y una experiencia consistente en distintos dispositivos."
    ],
  },
  {
    slug: "drumkit",
    title: "Drum Kit",
    image: "/drums.jpg",
    liveUrl: "https://drum-kit-js-project.netlify.app/",
    sector: "Juego interactivo",
    stack: ["html", "css", "javascript"],
    description: [
      "Drum Kit es una aplicación interactiva desarrollada para experimentar con la creación de sonidos mediante una interfaz web dinámica y accesible desde cualquier dispositivo.",
      "El proyecto consiste en una batería virtual que permite reproducir distintos sonidos utilizando el teclado como controlador, transformando las teclas del usuario en instrumentos digitales mediante la captura de eventos y reproducción de audio en tiempo real.",
      "Durante el desarrollo se trabajó con interacción usuario-navegador, manejo de eventos, integración de recursos multimedia y una experiencia de uso rápida e intuitiva. Este proyecto representa una exploración práctica del potencial de las tecnologías web para crear aplicaciones interactivas, combinando programación, creatividad y experiencia de usuario en una herramienta simple pero entretenida."
    ],
  },
  {
    slug: "text-to-speech",
    title: "Text to Speech",
    image: "/text-to-speach.png",
    liveUrl: "https://textospeech-lazzeri.netlify.app/",
    sector: "Aplicación web",
    stack: ["html", "css", "javascript"],
    description: [
      "Text to Speech es una aplicación web desarrollada para explorar las capacidades de reconocimiento de voz directamente desde el navegador, permitiendo transformar el audio capturado por el micrófono en texto de manera rápida e interactiva.",
      "El proyecto utiliza las APIs nativas del navegador para acceder al dispositivo de entrada de audio y realizar la transcripción en tiempo real de las palabras del usuario. La interfaz fue diseñada buscando simplicidad y facilidad de uso, permitiendo comenzar a dictar y visualizar el resultado sin configuraciones complejas.",
      "Durante el desarrollo se trabajó con captura de audio, manejo de eventos, interacción con APIs del navegador y actualización dinámica del contenido, demostrando cómo las tecnologías web pueden integrarse para crear herramientas prácticas basadas en reconocimiento de voz."
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}