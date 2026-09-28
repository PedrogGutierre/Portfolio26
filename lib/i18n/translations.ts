export type Language = "pt" | "en"

const pt = {
  header: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    toggleTheme: "Alternar tema",
    menu: "Menu",
    language: "Idioma",
  },
  hero: {
    greeting: "Olá, Pedro aqui!",
    iAm: "Eu sou",
    roles: ["Estudante de Engenharia de Software", "Desenvolvedor Full Stack"],
    description:
      "Estudante de Engenharia de Software com o objetivo de aliar código limpo a uma excelente experiência de uso. Para entregar o melhor resultado, estou sempre a estudar novas ferramentas e padrões para elevar o nível dos meus projetos e tornar-me um desenvolvedor mais completo.",
    downloadResume: "Download Currículo",
    resumeHref: "/curriculo2026.pdf",
    resumeFileName: "Pedro_Gutierre_Curriculo.pdf",
    contactMe: "Entrar em Contato",
    scrollToAbout: "Rolar para a secção Sobre",
  },
  about: {
    title: "Sobre Mim",
    subtitle:
      "Sou um programador full-stack, focado em construir aplicações escaláveis, seguras e centradas no utilizador, utilizando ferramentas modernas para resolver problemas reais.",
    imageAlt: "Pedro Gutierre a programar",
    journeyTitle: "A Minha Jornada",
    journeyText:
      "A curiosidade pela tecnologia que surgiu na pandemia, quando estava no ensino médio técnico conhecendo a programação, acabou me levando ao 6º semestre de Engenharia de Software na FIAP. Hoje, atuando na infraestrutura de TI, utilizo os meus conhecimentos para desenvolver scripts que automatizam tarefas diárias e gerenciam terminais remotamente. Tenho experiência em Front-end (React, Next.js, TypeScript) e fundamentação na criação de arquiteturas Back-end, mantendo estudos contínuos em linguagens como Java e Python. No tempo livre, dedico-me aos estudos e desenvolvo projetos práticos para adquirir mais conhecimentos e experimentar novas tecnologias, com o objetivo de me tornar um desenvolvedor mais completo.",
    approachTitle: "A Minha Abordagem",
    approachText:
      "A minha abordagem baseia-se na eficiência e na vontade constante de fazer sempre melhor. Procuro otimizar a forma como resolvo os problemas, unindo o que aprendo para entregar soluções sólidas. Encaro cada novo projeto e momento de estudo como uma oportunidade para aprender cada vez mais e evoluir tecnicamente. No fim do dia, o que mais me motiva é entregar um resultado excelente, focando sempre na máxima qualidade do produto final.",
  },
  experience: {
    label: "Trajetória",
    title: "Experiência & Formação",
    subtitle:
      "Uma combinação de base académica sólida com experiência prática no ambiente corporativo de tecnologia.",
    items: [
      {
        date: "Jan 2025 - Presente",
        title: "Estagiário de TI (Infraestrutura)",
        institution: "FIAP",
        location: "São Paulo, SP",
        description:
          "Atuação no suporte técnico diário, focado na manutenção física e conserto de hardware dos equipamentos. Realizo o gerenciamento da infraestrutura local, apoiando-me em scripts práticos para agilizar rotinas básicas das máquinas,",
        duration: "Atual",
      },
      {
        date: "Jan 2024 - Dez 2027",
        title: "Engenharia de Software (6º Semestre)",
        institution: "FIAP",
        location: "São Paulo, SP",
        description:
          "Em formação superior com foco em desenvolvimento Full-Stack, arquitetura de software, metodologias ágeis e integração de sistemas. Desenvolvimento de projetos práticos em Java, Python e React.",
        duration: "4 anos",
      },
      {
        date: "Jan 2021 - Dez 2023",
        title: "Ensino Médio Técnico em Informática",
        institution: "FIAP",
        location: "São Paulo, SP",
        description:
          "Construção da base lógica e técnica. Introdução à programação, montagem e manutenção de computadores e fundamentos de redes de computadores.",
        duration: "3 anos",
      },
    ],
  },
  skills: {
    title: "Habilidades & Tecnologias",
  },
  projects: {
    title: "Projetos em Destaque",
    subtitle:
      "Aqui estão alguns dos meus projetos recentes que demonstram as minhas habilidades full-stack.",
    screenshotAlt: "Captura de tela do projeto",
    code: "Código",
    visit: "Acessar",
    items: [
      {
        title: "BodyMeasure AI — Alfaiate Virtual",
        description:
          "Sistema de Visão Computacional em Python para extração de medidas corporais em tempo real. Utiliza MediaPipe Heavy e OpenCV no mapeamento anatômico 3D, calculando perímetros, proporções e métricas estéticas.",
      },
      {
        title: "NovaGreen — Energia Renovável",
        description:
          "Plataforma de logística reversa que conecta pontos de descarte a ONGs para converter resíduos em energia. Desenvolvida com JavaScript, SCSS e HTML5, integra lógica IoT de balanças inteligentes para calcular a biomassa orgânica descartada.",
      },
      {
        title: "LifeOcean: Dados Geoespaciais",
        description:
          "Script em Python desenvolvido para extração, tradução e transformação de dados geográficos. Utiliza a biblioteca Pandas e Deep Translator para processar planilhas complexas e exportar bases estruturadas em JSON, alimentando sistemas de mapas interativos.",
      },
    ],
  },
  contact: {
    title: "Vamos Conversar",
    email: "Email",
    copyEmail: "Copiar Email",
    emailCopied: "Email copiado para a área de transferência!",
    location: "Localização",
    locationValue: "São Paulo, SP - Brasil",
    connect: "Conecte-se Comigo",
    nameLabel: "O seu Nome",
    namePlaceholder: "Introduza o seu nome",
    emailLabel: "O seu Email",
    emailPlaceholder: "Introduza o seu email",
    messageLabel: "A sua Mensagem",
    messagePlaceholder: "Escreva a sua mensagem aqui...",
    send: "Enviar Mensagem",
  },
  footer: {
    description:
      "Construindo o futuro, uma linha de código de cada vez. Focado em criar soluções eficientes, escaláveis e centradas no utilizador.",
    quickLinks: "Links Rápidos",
    connect: "Conectar",
    rights: "Todos os direitos reservados.",
  },
}

type Dictionary = typeof pt

const en: Dictionary = {
  header: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    toggleTheme: "Toggle theme",
    menu: "Menu",
    language: "Language",
  },
  hero: {
    greeting: "Hi, Pedro here!",
    iAm: "I'm a",
    roles: ["Software Engineering Student", "Full Stack Developer"],
    description:
      "Software Engineering student aiming to combine clean code with an excellent user experience. To deliver the best results, I'm always studying new tools and patterns to raise the level of my projects and become a more well-rounded developer.",
    downloadResume: "Download Resume",
    resumeHref: "/curriculo2026-en.pdf",
    resumeFileName: "Pedro_Gutierre_Resume.pdf",
    contactMe: "Get in Touch",
    scrollToAbout: "Scroll to the About section",
  },
  about: {
    title: "About Me",
    subtitle:
      "I'm a full-stack developer focused on building scalable, secure and user-centered applications, using modern tools to solve real problems.",
    imageAlt: "Pedro Gutierre programming",
    journeyTitle: "My Journey",
    journeyText:
      "My curiosity about technology, which started during the pandemic when I was in technical high school discovering programming, ended up taking me to the 6th semester of Software Engineering at FIAP. Today, working in IT infrastructure, I use my knowledge to develop scripts that automate daily tasks and manage remote terminals. I have experience in Front-end (React, Next.js, TypeScript) and a foundation in building Back-end architectures, while continuing to study languages such as Java and Python. In my free time, I dedicate myself to studying and building hands-on projects to gain more knowledge and experiment with new technologies, with the goal of becoming a more well-rounded developer.",
    approachTitle: "My Approach",
    approachText:
      "My approach is based on efficiency and a constant drive to always do better. I look for ways to optimize how I solve problems, combining what I learn to deliver solid solutions. I see every new project and study session as an opportunity to keep learning and growing technically. At the end of the day, what motivates me most is delivering an excellent result, always focusing on the highest quality of the final product.",
  },
  experience: {
    label: "Journey",
    title: "Experience & Education",
    subtitle:
      "A combination of a solid academic background with hands-on experience in a corporate technology environment.",
    items: [
      {
        date: "Jan 2025 - Present",
        title: "IT Intern (Infrastructure)",
        institution: "FIAP",
        location: "São Paulo, SP",
        description:
          "Working in daily technical support, focused on physical maintenance and hardware repair of equipment. I manage the local infrastructure, relying on practical scripts to speed up basic machine routines.",
        duration: "Current",
      },
      {
        date: "Jan 2024 - Dec 2027",
        title: "Software Engineering (6th Semester)",
        institution: "FIAP",
        location: "São Paulo, SP",
        description:
          "Pursuing a bachelor's degree focused on Full-Stack development, software architecture, agile methodologies and systems integration. Building hands-on projects in Java, Python and React.",
        duration: "4 years",
      },
      {
        date: "Jan 2021 - Dec 2023",
        title: "Technical High School in Computer Science",
        institution: "FIAP",
        location: "São Paulo, SP",
        description:
          "Building the logical and technical foundation. Introduction to programming, computer assembly and maintenance, and computer networking fundamentals.",
        duration: "3 years",
      },
    ],
  },
  skills: {
    title: "Skills & Technologies",
  },
  projects: {
    title: "Featured Projects",
    subtitle:
      "Here are some of my recent projects that showcase my full-stack skills.",
    screenshotAlt: "Screenshot of the project",
    code: "Code",
    visit: "Visit",
    items: [
      {
        title: "BodyMeasure AI — Virtual Tailor",
        description:
          "Computer Vision system in Python for real-time body measurement extraction. Uses MediaPipe Heavy and OpenCV for 3D anatomical mapping, calculating perimeters, proportions and aesthetic metrics.",
      },
      {
        title: "NovaGreen — Renewable Energy",
        description:
          "Reverse logistics platform that connects disposal points to NGOs to turn waste into energy. Built with JavaScript, SCSS and HTML5, it integrates IoT logic from smart scales to calculate the amount of organic biomass discarded.",
      },
      {
        title: "LifeOcean: Geospatial Data",
        description:
          "Python script built to extract, translate and transform geographic data. Uses the Pandas library and Deep Translator to process complex spreadsheets and export structured JSON datasets that feed interactive map systems.",
      },
    ],
  },
  contact: {
    title: "Let's Talk",
    email: "Email",
    copyEmail: "Copy Email",
    emailCopied: "Email copied to the clipboard!",
    location: "Location",
    locationValue: "São Paulo, SP - Brazil",
    connect: "Connect With Me",
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Your Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Your Message",
    messagePlaceholder: "Write your message here...",
    send: "Send Message",
  },
  footer: {
    description:
      "Building the future, one line of code at a time. Focused on creating efficient, scalable and user-centered solutions.",
    quickLinks: "Quick Links",
    connect: "Connect",
    rights: "All rights reserved.",
  },
}

export const translations: Record<Language, Dictionary> = { pt, en }

export type TranslationKeys = Dictionary
