import { useCallback, useEffect, useRef, useState } from 'react'
import aesaLogo from '../assets/aesa.png'
import aivenLogo from '../assets/aiven.png'
import codexLogo from '../assets/codex.png'
import cvEngPdf from '../assets/cv-eng.pdf'
import cvPtPdf from '../assets/cv-pt.pdf'
import georgeImage from '../assets/george.png'
import limagroupLogo from '../assets/limagroup.png'
import resendLogo from '../assets/resend.png'
import startupLogo from '../assets/startup.png'
import vercelLogo from '../assets/vercel.png'
import cpamProject1 from '../assets/Projects/cpam1.png'
import cpamProject2 from '../assets/Projects/cpam2.png'
import cpamProject3 from '../assets/Projects/cpam3.png'
import eqavetProject1 from '../assets/Projects/eqavet1.png'
import eqavetProject2 from '../assets/Projects/eqavet2.png'
import eqavetProject3 from '../assets/Projects/eqavet3.png'
import fctDocsProject1 from '../assets/Projects/fctDocs0.png'
import fctDocsProject2 from '../assets/Projects/fctDocs1.png'
import fctDocsProject3 from '../assets/Projects/fctDocs2.png'
import fctDocsProject4 from '../assets/Projects/fctDocs3.png'
import letsFindPeopleProject1 from '../assets/Projects/letsfindpeople1.png'
import letsFindPeopleProject2 from '../assets/Projects/letsfindpeople2.png'
import letsFindPeopleProject3 from '../assets/Projects/letsfindpeople3.png'
import letsFindPeopleProject4 from '../assets/Projects/letsfindpeople4.png'
import limagroupProject1 from '../assets/Projects/limagroup1.png'
import limagroupProject2 from '../assets/Projects/limagroup2.png'
import limagroupProject3 from '../assets/Projects/limagroup3.png'
import limagroupProject4 from '../assets/Projects/limagroup4.png'
import limagroupProject5 from '../assets/Projects/limagroup5.png'
import luisAnjosHairstylistProject1 from '../assets/Projects/luisanjoshairstylist1.png'
import luisAnjosHairstylistProject2 from '../assets/Projects/luisanjoshairstylist2.png'
import luisAnjosHairstylistProject3 from '../assets/Projects/luisanjoshairstylist3.png'
import luisAnjosHairstylistProject4 from '../assets/Projects/luisanjoshairstylist4.png'
import luisAnjosHairstylistProject5 from '../assets/Projects/luisanjoshairstylist5.png'
import susanaGuerreiroCabelereiroProject1 from '../assets/Projects/susanaguerreirocabelereiro1.png'
import susanaGuerreiroCabelereiroProject2 from '../assets/Projects/susanaguerreirocabelereiro2.png'
import susanaGuerreiroCabelereiroProject3 from '../assets/Projects/susanaguerreirocabelereiro3.png'
import susanaGuerreiroCabelereiroProject4 from '../assets/Projects/susanaguerreirocabelereiro4.png'
import susanaGuerreiroCabelereiroProject5 from '../assets/Projects/susanaguerreirocabelereiro5.png'
import susanaGuerreiroCabelereiroProject6 from '../assets/Projects/susanaguerreirocabelereiro6.png'
import susanaGuerreiroCabelereiroProject7 from '../assets/Projects/susanaguerreirocabelereiro7.png'
import susanaGuerreiroCabelereiroProject8 from '../assets/Projects/susanaguerreirocabelereiro8.png'
import thunderlimitedVideo from '../assets/thunderlimited.mov'
import twoKBarbershopProject1 from '../assets/Projects/2kbarbershop1.png'
import twoKBarbershopProject2 from '../assets/Projects/2kbarbershop2.png'
import twoKBarbershopProject3 from '../assets/Projects/2kbarbershop3.png'
import twoKBarbershopProject4 from '../assets/Projects/2kbarbershop4.png'
import twoKBarbershopProject5 from '../assets/Projects/2kbarbershop5.png'
import twoKBarbershopProject6 from '../assets/Projects/2kbarbershop6.png'
import twoKBarbershopProject7 from '../assets/Projects/2kbarbershop7.png'
import waspeeProject1 from '../assets/Projects/waspee.png'
import waspeeProject2 from '../assets/Projects/waspee1.png'
import waspeeProject3 from '../assets/Projects/waspee2.png'
import waspeeProject4 from '../assets/Projects/waspee3.png'

const profileImage = georgeImage
const stackedIntroMediaQuery = '(max-width: 991.98px)'

const projectOptions = ['Software', 'Business', 'Video Games']

const googlePlayConsoleIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Google-Play-Console-Icon--Streamline-Svg-Logos" height="24" width="24">
  <desc>
    Google Play Console Icon Streamline Icon: https://streamlinehq.com
  </desc>
  <path fill="#2f80ed" d="M1.351685 21.145075V2.85595c0 -2.0033175 2.193515 -3.255395 3.949365 -2.253l16.030975 9.1442c1.755125 1.00165 1.755125 3.50435 0 4.505275L5.30105 23.39735c-1.7551 1.00165 -3.949365 -0.249675 -3.949365 -2.252275Z" stroke-width="0.25"></path>
  <path fill="#ccf6ff" d="M17.4025 7.5059 8.979425 12.3563 7.3712 9.507c-0.180325 -0.320225 -0.481225 -0.555025 -0.8357 -0.6521 -0.3549 -0.0996 -0.7348 -0.054725 -1.056725 0.12485L1.351685 11.270925v2.80965L5.7402 11.64325l1.615575 2.863975c0.18065 0.31945 0.489075 0.558125 0.845975 0.65505 0.359625 0.0967 0.7429 0.047325 1.066275 -0.137325l10.60705 -6.1091 -2.472575 -1.40995Z" stroke-width="0.25"></path>
</svg>
`)}`

const homeText = {
  en: {
    heroTitle: "Welcome to George Aguiar's Portfolio",
    heroIntro:
      'Passionate about software development, artificial intelligence, and robotics. Aiming to build a fully automated world.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    aboutTitle: 'About Me',
    aboutMe:
      'Fluent in Portuguese and English. Known for attention to detail, organization, punctuality, a strong work ethic, and fast learning. I enjoy building efficient systems.',
    viewCv: 'View CV',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    experienceTitle: 'Work Experience',
    projectsTitle: 'Projects',
    projectCategoryLabel: 'Select project category',
    madeWith: 'Made With:',
    viewWebsite: 'View Website',
    projectOptions: {
      Software: 'Software',
      Business: 'Business',
      'Video Games': 'Video Games',
    },
  },
  pt: {
    heroTitle: 'Bem-vindo ao Portfolio de George Aguiar',
    heroIntro:
      'Apaixonado por desenvolvimento de software, inteligência artificial e robótica. Com o objetivo de construir um mundo totalmente automatizado.',
    viewProjects: 'Ver Projetos',
    contactMe: 'Contacta-me',
    aboutTitle: 'Sobre Mim',
    aboutMe:
      'Fluente em português e inglês. Reconhecido pela atenção ao detalhe, organização, pontualidade, forte ética de trabalho e aprendizagem rápida. Gosto de construir sistemas eficientes.',
    viewCv: 'VER CV',
    skillsTitle: 'Competências',
    educationTitle: 'Educação',
    experienceTitle: 'Experiência Profissional',
    projectsTitle: 'Projetos',
    projectCategoryLabel: 'Selecionar categoria de projeto',
    madeWith: 'Feito Com:',
    viewWebsite: 'Ver Website',
    projectOptions: {
      Software: 'Software',
      Business: 'Negócios',
      'Video Games': 'Jogos',
    },
  },
}

const technologyIcons = {
  C: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  GDScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  SCSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  Miro: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg/miro.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  Codex: codexLogo,
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg/supabase.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  Aiven: aivenLogo,
  Vercel: vercelLogo,
  Resend: resendLogo,
  'Google Play Console': googlePlayConsoleIcon,
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
}

const projects = [
  {
    title: 'LimaGroup',
    category: 'Software',
    description: {
      en: 'A consulting company that helps other businesses grow, organize processes, and find better solutions for their operations.',
      pt: 'Uma empresa de consultoria que ajuda outros negócios a crescer, organizar processos e encontrar melhores soluções para as suas operações.',
    },
    galleryImages: [
      { src: limagroupProject1, alt: 'LimaGroup home page preview' },
      { src: limagroupProject2, alt: 'LimaGroup services page preview' },
      { src: limagroupProject3, alt: 'LimaGroup consulting page preview' },
      { src: limagroupProject4, alt: 'LimaGroup contact page preview' },
      { src: limagroupProject5, alt: 'LimaGroup mobile page preview' },
    ],
    technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Node.js', 'MySQL', 'GitHub'],
    websiteUrl: 'https://limagroup-consulting.com/',
  },
  {
    title: 'Waspee',
    category: 'Software',
    description: {
      en: 'A local task marketplace where users can post jobs, hire nearby people, and get paid safely through escrow-based payments.',
      pt: 'Um mercado local de tarefas onde os utilizadores podem publicar trabalhos, contratar pessoas próximas e receber pagamentos de forma segura através de pagamentos em garantia.',
    },
    galleryImages: [
      { src: waspeeProject1, alt: 'Waspee landing page preview' },
      { src: waspeeProject2, alt: 'Waspee task marketplace preview' },
      { src: waspeeProject3, alt: 'Waspee task details preview' },
      { src: waspeeProject4, alt: 'Waspee account dashboard preview' },
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'MySQL', 'GitHub'],
    websiteUrl: 'https://waspee.com',
  },
  {
    title: 'LetsFindPeople',
    category: 'Software',
    description: {
      en: 'A platform where users create profiles with their interests and use filters to find people with the exact interests they choose.',
      pt: 'Uma plataforma onde os utilizadores criam perfis com os seus interesses e usam filtros para encontrar pessoas com os interesses exatos que escolherem.',
    },
    galleryImages: [
      {
        src: letsFindPeopleProject1,
        alt: 'LetsFindPeople landing page preview',
      },
      {
        src: letsFindPeopleProject2,
        alt: 'LetsFindPeople profile search preview',
      },
      {
        src: letsFindPeopleProject3,
        alt: 'LetsFindPeople filters preview',
      },
      {
        src: letsFindPeopleProject4,
        alt: 'LetsFindPeople profile details preview',
      }
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'Supabase', 'PostgreSQL', 'GitHub'],
    repoUrl: 'https://github.com/mestregeorge/letsfindpeople',
    websiteUrl: 'https://letsfindpeople.com',
  },
  {
    title: 'AESA FCT Docs',
    category: 'Software',
    description: {
      en: 'A platform that helps class directors across AESA schools automatically generate all documents required for student internships.',
      pt: 'Uma plataforma que ajuda diretores de turma das escolas AESA a gerar automaticamente todos os documentos necessários para estágios de alunos.',
    },
    galleryImages: [
      { src: fctDocsProject1, alt: 'AESA FCT Docs home page preview' },
      { src: fctDocsProject2, alt: 'AESA FCT Docs document list preview' },
      { src: fctDocsProject3, alt: 'AESA FCT Docs document details preview' },
      { src: fctDocsProject4, alt: 'AESA FCT Docs form preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Angular', 'Node.js', 'MySQL', 'GitHub'],
    websiteUrl: null,
  },
  {
    title: 'AESA Inquéritos',
    category: 'Software',
    description: {
      en: 'A platform across AESA schools for students and teachers to rate each other, with Excel report exports for admins.',
      pt: 'Uma plataforma para as escolas AESA onde alunos e professores se podem avaliar, com exportação de relatórios em Excel para administradores.',
    },
    galleryImages: [
      { src: eqavetProject1, alt: 'AESA Inqueritos home page preview' },
      { src: eqavetProject2, alt: 'AESA Inqueritos survey preview' },
      { src: eqavetProject3, alt: 'AESA Inqueritos results preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL', 'GitHub'],
    websiteUrl: 'https://eqavet.aesa.edu.pt/eqavet',
  },
  {
    title: 'CPASM',
    category: 'Software',
    description: {
      en: 'A website for a church in Moita, Portugal, where visitors can view information, contacts, schedules, and news.',
      pt: 'Um website para uma igreja na Moita, Portugal, onde visitantes podem ver informações, contactos, horários e notícias.',
    },
    galleryImages: [
      { src: cpamProject1, alt: 'CPASM home page preview' },
      { src: cpamProject2, alt: 'CPASM content page preview' },
      { src: cpamProject3, alt: 'CPASM contact page preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL', 'GitHub'],
    websiteUrl: 'https://cpasmoita.pt',
  },
  {
    title: 'Luis Anjos Hairstylist',
    category: 'Business',
    description: {
      en: 'A polished appointment-focused website for a hairstylist, presenting services, gallery highlights, contact details, and a clear booking path for clients.',
      pt: 'Um website cuidado e focado em marcações para um hairstylist, com serviços, destaques da galeria, contactos e um caminho claro para os clientes reservarem.',
    },
    galleryImages: [
      {
        src: luisAnjosHairstylistProject1,
        alt: 'Luis Anjos Hairstylist home page preview',
      },
      {
        src: luisAnjosHairstylistProject2,
        alt: 'Luis Anjos Hairstylist services preview',
      },
      {
        src: luisAnjosHairstylistProject3,
        alt: 'Luis Anjos Hairstylist gallery preview',
      },
      {
        src: luisAnjosHairstylistProject4,
        alt: 'Luis Anjos Hairstylist booking preview',
      },
      {
        src: luisAnjosHairstylistProject5,
        alt: 'Luis Anjos Hairstylist contact preview',
      },
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'MySQL', 'Aiven', 'Vercel', 'GitHub'],
    websiteUrl: 'https://luis-anjos-hairstylist.vercel.app/',
  },
  {
    title: 'Susana Guerreiro Cabelereiro',
    category: 'Business',
    description: {
      en: 'A bright salon website designed to showcase hair services, client results, testimonials, and an easy way to request appointments or budgets.',
      pt: 'Um website luminoso para salão, pensado para mostrar serviços de cabelo, resultados de clientes, testemunhos e uma forma simples de pedir marcações ou orçamentos.',
    },
    galleryImages: [
      {
        src: susanaGuerreiroCabelereiroProject1,
        alt: 'Susana Guerreiro Cabelereiro home page preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject2,
        alt: 'Susana Guerreiro Cabelereiro about page preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject3,
        alt: 'Susana Guerreiro Cabelereiro services preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject4,
        alt: 'Susana Guerreiro Cabelereiro results preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject5,
        alt: 'Susana Guerreiro Cabelereiro testimonials preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject6,
        alt: 'Susana Guerreiro Cabelereiro quote form preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject7,
        alt: 'Susana Guerreiro Cabelereiro FAQ preview',
      },
      {
        src: susanaGuerreiroCabelereiroProject8,
        alt: 'Susana Guerreiro Cabelereiro contact preview',
      },
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'MySQL', 'Aiven', 'Vercel', 'GitHub'],
    websiteUrl: 'https://susana-guerreiro-cabelereiro.vercel.app/',
  },
  {
    title: '2K Barbershop',
    category: 'Business',
    description: {
      en: 'A modern barbershop website that highlights services, haircut results, social proof, booking information, and practical contact details for local clients.',
      pt: 'Um website moderno para barbearia que destaca serviços, resultados de cortes, prova social, informações de marcação e contactos práticos para clientes locais.',
    },
    galleryImages: [
      { src: twoKBarbershopProject1, alt: '2K Barbershop home page preview' },
      { src: twoKBarbershopProject2, alt: '2K Barbershop about page preview' },
      { src: twoKBarbershopProject3, alt: '2K Barbershop services preview' },
      { src: twoKBarbershopProject4, alt: '2K Barbershop results preview' },
      {
        src: twoKBarbershopProject5,
        alt: '2K Barbershop testimonials preview',
      },
      { src: twoKBarbershopProject6, alt: '2K Barbershop booking preview' },
      { src: twoKBarbershopProject7, alt: '2K Barbershop contact preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'React', 'MySQL', 'Aiven', 'Vercel', 'GitHub'],
    websiteUrl: 'https://2k-barbershop.vercel.app/',
  },
  {
    title: 'Roboface',
    category: 'Video Games',
    description: {
      en: 'A 2D robot shooting game where players fight enemy robots, complete missions in story mode, survive endless waves, and play local multiplayer with friends.',
      pt: 'Um jogo de tiro 2D onde os jogadores lutam contra robôs inimigos, completam missões no modo história, sobrevivem a ondas infinitas e jogam multiplayer local com amigos.',
    },
    media: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/r9B32BNcM7Y',
      title: 'Roboface gameplay video',
    },
    technologies: ['GDScript'],
    websiteUrl: 'https://thunderlimited.itch.io/roboface',
  },
  {
    title: 'ThunderLimited',
    category: 'Video Games',
    description: {
      en: 'A store where I sell plugins for Godot 4 that simplify features like in-app purchases, AdMob, Google Play services, inventory systems, and more.',
      pt: 'Uma loja onde vendo plugins para Godot 4 que simplificam funcionalidades como compras in-app, AdMob, serviços do Google Play, sistemas de inventário e mais.',
    },
    media: {
      type: 'video',
      src: thunderlimitedVideo,
      title: 'ThunderLimited video preview',
    },
    technologies: ['GDScript'],
    websiteUrl: 'https://thunderlimited.itch.io',
  },
]

const education = [
  {
    role: {
      en: 'Computer Systems Technician',
      pt: 'Técnico de Sistemas Informáticos',
    },
    entity: 'Escola Secundária de Santo André',
    date: '2023 - 2026',
  },
]

const experience = [
  {
    id: 'limagroup-consulting',
    role: {
      en: 'Software Developer',
      pt: 'Desenvolvedor de Software',
    },
    entity: {
      en: 'LimaGroup Consulting - Internship',
      pt: 'LimaGroup Consulting - Estágio',
    },
    date: 'Jun 2025 - Jul 2025',
    logo: limagroupLogo,
    logoAlt: 'LimaGroup Consulting logo',
  },
  {
    id: 'startup-barreiro',
    role: {
      en: 'Software Developer',
      pt: 'Desenvolvedor de Software',
    },
    entity: {
      en: 'StartUp Barreiro - Internship',
      pt: 'StartUp Barreiro - Estágio',
    },
    date: 'Mar 2026 - Jun 2026',
    logo: startupLogo,
    logoAlt: 'Startup logo',
    logoClassName: 'experience-logo-sm',
  },
]

const skillIcons = [
  ['C', technologyIcons.C],
  ['Java', technologyIcons.Java],
  ['PHP', technologyIcons.PHP],
  ['GDScript', technologyIcons.GDScript],
  ['HTML', technologyIcons.HTML],
  ['CSS', technologyIcons.CSS],
  ['Bootstrap', technologyIcons.Bootstrap],
  ['SCSS', technologyIcons.SCSS],
  ['Miro', technologyIcons.Miro],
  ['TypeScript', technologyIcons.TypeScript],
  ['JavaScript', technologyIcons.JavaScript],
  ['Node.js', technologyIcons['Node.js']],
  ['Codex', technologyIcons.Codex],
  ['Angular', technologyIcons.Angular],
  ['React', technologyIcons.React],
  ['Supabase', technologyIcons.Supabase],
  ['PostgreSQL', technologyIcons.PostgreSQL],
  ['MySQL', technologyIcons.MySQL],
  ['Aiven', technologyIcons.Aiven],
  ['Vercel', technologyIcons.Vercel],
  ['Resend', technologyIcons.Resend],
  ['Google Play Console', technologyIcons['Google Play Console']],
  ['Git', technologyIcons.Git],
  ['GitHub', technologyIcons.GitHub],
]

function Home({ locale }) {
  const text = homeText[locale]
  const cvPdf = locale === 'pt' ? cvPtPdf : cvEngPdf
  const introSectionRef = useRef(null)
  const introPanelRef = useRef(null)
  const introTrackRef = useRef(null)
    const projectScrollRef = useRef(null)
    const projectScrollbarTrackRef = useRef(null)
    const projectScrollbarDragRef = useRef(null)
    const [projectScrollbarMetrics, setProjectScrollbarMetrics] = useState({
      thumbLeft: 0,
      thumbWidth: 0,
    })
    const [imagePreview, setImagePreview] = useState(null)
    const [selectedProjectOption, setSelectedProjectOption] =
      useState('Software')

    const visibleProjects = projects.filter(
      (project) => project.category === selectedProjectOption,
    )
    const showProjectScrollbar = visibleProjects.length >= 4
    const activePreviewImage = imagePreview?.images?.[imagePreview.index]

    const updateImagePreviewByStep = useCallback((step) => {
      setImagePreview((currentPreview) => {
        if (!currentPreview?.images?.length) {
          return currentPreview
        }

        const nextIndex =
          (currentPreview.index + step + currentPreview.images.length) %
          currentPreview.images.length

        return {
          ...currentPreview,
          index: nextIndex,
        }
      })
    }, [])

  useEffect(() => {
    if (!window.location.hash) {
      window.history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }

    const updateIntroProgress = () => {
      const section = introSectionRef.current
      const panel = introPanelRef.current
      const track = introTrackRef.current

      if (!section || !panel || !track) {
        return
      }

      if (window.matchMedia(stackedIntroMediaQuery).matches) {
        section.style.minHeight = ''
        track.style.setProperty('--intro-offset', '0px')
        return
      }

      const scrollDistance = Math.max(track.scrollHeight - panel.clientHeight, 0)
      section.style.minHeight = `${window.innerHeight + scrollDistance}px`

      const rect = section.getBoundingClientRect()
      const scrollRange = section.offsetHeight - window.innerHeight
      const activeScroll = Math.max(-rect.top, 0)
      const progress =
        scrollRange > 0 ? Math.min(Math.max(activeScroll / scrollRange, 0), 1) : 0

      track.style.setProperty(
        '--intro-offset',
        `${-progress * scrollDistance}px`,
      )
    }

    updateIntroProgress()
    requestAnimationFrame(updateIntroProgress)
    window.addEventListener('scroll', updateIntroProgress, { passive: true })
    window.addEventListener('resize', updateIntroProgress)
    window.addEventListener('load', updateIntroProgress)

    const scrollToAbout = () => {
      const section = introSectionRef.current
      const panel = introPanelRef.current
      const track = introTrackRef.current
      const heroRow = track?.querySelector('.intro-hero-row')

      if (!section || !panel || !track || !heroRow) {
        return
      }

      if (window.matchMedia(stackedIntroMediaQuery).matches) {
        window.history.pushState(null, '', '#about')
        document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        return
      }

      updateIntroProgress()

      const sectionTop = window.scrollY + section.getBoundingClientRect().top
      const scrollDistance = Math.max(track.scrollHeight - panel.clientHeight, 0)
      const targetOffset = Math.min(heroRow.offsetHeight, scrollDistance)

      window.history.pushState(null, '', '#about')
      window.scrollTo({
        top: sectionTop + targetOffset,
        behavior: 'smooth',
      })
    }

    window.addEventListener('portfolio:scroll-about', scrollToAbout)

    return () => {
      window.removeEventListener('scroll', updateIntroProgress)
      window.removeEventListener('resize', updateIntroProgress)
      window.removeEventListener('load', updateIntroProgress)
      window.removeEventListener('portfolio:scroll-about', scrollToAbout)
    }
  }, [])

  useEffect(() => {
    const scroller = projectScrollRef.current

	    if (!scroller) {
	      return undefined
	    }

	    scroller.scrollLeft = 0
	    projectScrollbarDragRef.current = null
	
	    const updateProjectScrollbar = () => {
      const track = projectScrollbarTrackRef.current

      if (!track) {
        return
      }

      const scrollWidth = scroller.scrollWidth
      const visibleWidth = scroller.clientWidth
      const trackWidth = track.clientWidth
      const maxScrollLeft = Math.max(scrollWidth - visibleWidth, 0)

      if (maxScrollLeft === 0) {
        setProjectScrollbarMetrics({
          thumbLeft: 0,
          thumbWidth: trackWidth,
        })
        return
      }

      const thumbWidth = Math.max((visibleWidth / scrollWidth) * trackWidth, 44)
      const maxThumbLeft = Math.max(trackWidth - thumbWidth, 0)
      const thumbLeft = (scroller.scrollLeft / maxScrollLeft) * maxThumbLeft

      setProjectScrollbarMetrics({
        thumbLeft,
        thumbWidth,
      })
    }

    updateProjectScrollbar()
    requestAnimationFrame(updateProjectScrollbar)
    scroller.addEventListener('scroll', updateProjectScrollbar, { passive: true })
    window.addEventListener('resize', updateProjectScrollbar)

    return () => {
      scroller.removeEventListener('scroll', updateProjectScrollbar)
      window.removeEventListener('resize', updateProjectScrollbar)
    }
  }, [selectedProjectOption])

    useEffect(() => {
      const handlePointerMove = (event) => {
        const drag = projectScrollbarDragRef.current
        const scroller = projectScrollRef.current

      if (!drag || !scroller) {
        return
      }

      if (drag.maxThumbLeft <= 0) {
        return
      }

      const scrollDelta =
        ((event.clientX - drag.startX) / drag.maxThumbLeft) * drag.maxScrollLeft
      scroller.scrollLeft = drag.startScrollLeft + scrollDelta
    }

    const handlePointerUp = () => {
      projectScrollbarDragRef.current = null
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
    }, [])

    useEffect(() => {
      if (!imagePreview) {
        return undefined
      }

      const previousOverflow = document.body.style.overflow
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setImagePreview(null)
          return
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          updateImagePreviewByStep(-1)
        }

        if (event.key === 'ArrowRight') {
          event.preventDefault()
          updateImagePreviewByStep(1)
        }
      }

      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = previousOverflow
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [imagePreview, updateImagePreviewByStep])

    const handleProjectScrollbarPointerDown = (event) => {
    const scroller = projectScrollRef.current
    const track = projectScrollbarTrackRef.current

    if (!scroller || !track) {
      return
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth

    if (maxScrollLeft <= 0) {
      return
    }

    event.preventDefault()

    const trackRect = track.getBoundingClientRect()
    const pointerX = event.clientX - trackRect.left
    const maxThumbLeft = trackRect.width - projectScrollbarMetrics.thumbWidth

    if (maxThumbLeft <= 0) {
      return
    }

    const clickedThumb =
      pointerX >= projectScrollbarMetrics.thumbLeft &&
      pointerX <=
        projectScrollbarMetrics.thumbLeft + projectScrollbarMetrics.thumbWidth

    if (!clickedThumb) {
      const thumbLeft = Math.min(
        Math.max(pointerX - projectScrollbarMetrics.thumbWidth / 2, 0),
        maxThumbLeft,
      )
      scroller.scrollTo({
        left: (thumbLeft / maxThumbLeft) * maxScrollLeft,
        behavior: 'smooth',
      })
      return
    }

    projectScrollbarDragRef.current = {
      startScrollLeft: scroller.scrollLeft,
      startX: event.clientX,
      maxScrollLeft,
      maxThumbLeft,
    }
  }

  return (
    <main>
      <section
        id="home"
        className="bg-white text-primary intro-scroll-section"
        ref={introSectionRef}
      >
        <div className="intro-sticky-frame">
          <div className="container">
            <div className="row align-items-center g-5 intro-layout">
              <div className="col-lg-7 intro-content-column">
                <div className="intro-scroll-panel" ref={introPanelRef}>
                  <div className="intro-scroll-track" ref={introTrackRef}>
                    <div className="intro-scroll-row intro-hero-row">
                      <div className="intro-mobile-image d-lg-none text-center mb-4">
                        <img
                          src={profileImage}
                          className="img-fluid rounded-circle border border-5 border-primary intro-profile-image"
                          alt="George Aguiar"
                        />
                      </div>
                      <h1 className="display-3 fw-bold lh-1 mb-4">
                        {text.heroTitle}
                      </h1>
                      <p className="lead fw-semibold mb-4">
                        {text.heroIntro}
                      </p>
                      <div className="d-flex flex-wrap gap-3 intro-hero-actions">
                        <a
                          className="btn btn-lg bg-primary text-white border-primary fw-semibold"
                          href="#projects"
                        >
                          {text.viewProjects}
                        </a>
                        <a
                          className="btn btn-lg border border-2 border-primary text-primary fw-semibold"
                          href="#contact"
                        >
                          {text.contactMe}
                        </a>
                      </div>
                    </div>

                    <div className="intro-scroll-row intro-details-row">
                      <div className="intro-detail-block" id="about">
                        <h2 className="display-6 fw-bold mb-4">{text.aboutTitle}</h2>
                        <p className="lead fw-semibold mb-0">
                          {text.aboutMe}{' '}
                          <a
                            className="text-primary text-decoration-underline fw-bold"
                            href={cvPdf}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {text.viewCv} <span aria-hidden="true">→</span>
                          </a>
                        </p>
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">{text.skillsTitle}</h2>
                        <div className="d-flex flex-wrap gap-3">
                          {skillIcons.map(([label, iconSrc]) => (
                            <img
                              className="skill-brand-icon"
                              src={iconSrc}
                              alt={label}
                              title={label}
                              key={label}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="intro-detail-block" id="education">
                        <h2 className="display-6 fw-bold mb-4">{text.educationTitle}</h2>
                        {education.map((item) => (
                          <article
                            className="card border-0 bg-white text-primary intro-info-row"
                            key={item.role}
                          >
                            <div className="card-body p-0">
                              <div className="row align-items-center g-0">
                                <div className="col-auto">
                                  <img
                                    src={aesaLogo}
                                    className="img-fluid"
                                    alt="Escola Secundaria de Santo Andre logo"
                                  />
                                </div>
                                <div className="col ps-3">
                                  <h3 className="lead fw-bold mb-1">
                                    {item.role[locale]}
                                  </h3>
                                  <p className="lead fw-bold mb-1">{item.entity}</p>
                                  <p className="lead fw-semibold mb-0">{item.date}</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">{text.experienceTitle}</h2>
                        {experience.map((item) => (
                          <article
                            className="card border-0 bg-white text-primary intro-info-row experience-card"
                            key={item.id}
                          >
                            <div className="card-body p-0">
                              <div className="row align-items-center g-0">
                                <div className="col-auto experience-logo-col">
                                  <img
                                    src={item.logo}
                                    className={`img-fluid ${item.logoClassName ?? ''}`}
                                    alt={item.logoAlt}
                                  />
                                </div>
                                <div className="col ps-3">
                                  <h3 className="lead fw-bold mb-1">
                                    {item.role[locale]}
                                  </h3>
                                  <p className="lead fw-bold mb-1">
                                    {item.entity[locale]}
                                  </p>
                                  <p className="lead fw-semibold mb-0">{item.date}</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-center d-none d-lg-block intro-desktop-image">
                <img
                  src={profileImage}
                  className="img-fluid rounded-circle border border-5 border-primary intro-profile-image"
                  alt="George Aguiar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-primary text-white">
        <div className="container py-5">
          <div className="d-flex flex-row justify-content-between align-items-center gap-3 mb-4 project-header">
            <div>
              <h2 className="display-6 fw-bold mb-0 text-white">{text.projectsTitle}</h2>
            </div>
            <select
              className="form-select w-auto fw-semibold text-center project-category-select"
              aria-label={text.projectCategoryLabel}
              value={selectedProjectOption}
              onChange={(event) => setSelectedProjectOption(event.target.value)}
            >
              {projectOptions.map((option) => (
                <option className="text-center" value={option} key={option}>
                  {text.projectOptions[option]}
                </option>
              ))}
            </select>
          </div>

          <div className="project-scroll-shell">
            <div
              className="project-scroll"
              aria-label="Project list"
              ref={projectScrollRef}
            >
              {visibleProjects.map((project, index) => {
                const carouselId = `projectCarousel${index}`
                const useDarkCarouselControls =
                  project.title === 'Waspee' ||
                  project.title === 'LetsFindPeople' ||
                  project.title === 'AESA FCT Docs' ||
                  project.title === 'AESA Inquéritos' ||
                  project.title === 'CPASM' ||
                  project.title === 'Luis Anjos Hairstylist' ||
                  project.title === 'Susana Guerreiro Cabelereiro'

                return (
                  <div className="project-scroll-item" key={project.title}>
                    <article className="card h-100 border border-white bg-white text-primary project-card">
                      {project.media?.type === 'video' ? (
                        <video
                          className="d-block w-100 project-cover-image project-cover-video"
                          controls
                          preload="metadata"
                          src={project.media.src}
                          title={project.media.title}
                        >
                        </video>
                      ) : project.media?.type === 'youtube' ? (
                        <iframe
                          className="d-block w-100 project-cover-image project-cover-embed"
                          src={project.media.src}
                          title={project.media.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          id={carouselId}
                          className={`carousel slide project-cover-carousel ${
                            useDarkCarouselControls ? 'carousel-dark' : ''
                          }`}
                          aria-label={`${project.title} preview carousel`}
                        >
                          <div className="carousel-indicators">
                            {project.galleryImages.map((image, imageIndex) => (
                              <button
                                type="button"
                                data-bs-target={`#${carouselId}`}
                                data-bs-slide-to={imageIndex}
                                className={imageIndex === 0 ? 'active' : undefined}
                                aria-current={imageIndex === 0 ? 'true' : undefined}
                                aria-label={`${project.title} preview ${
                                  imageIndex + 1
                                }`}
                                key={image.alt}
                              ></button>
                            ))}
                          </div>

                          <div className="carousel-inner">
                            {project.galleryImages.map((image, imageIndex) => (
                              <div
                                className={`carousel-item ${
                                  imageIndex === 0 ? 'active' : ''
                                }`}
                                key={image.alt}
                              >
                                  <button
                                    className="project-image-preview-button"
                                    type="button"
                                    onClick={() =>
                                      setImagePreview({
                                        images: project.galleryImages,
                                        index: imageIndex,
                                        title: project.title,
                                      })
                                    }
                                    aria-label={`Open ${image.alt}`}
                                  >
                                    <img
                                      className="d-block w-100 project-cover-image"
                                      src={image.src}
                                      alt={image.alt}
                                    />
                                  </button>
                                </div>
                              ))}
                            </div>

                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide="prev"
                            aria-label={`Previous ${project.title} preview`}
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide="next"
                            aria-label={`Next ${project.title} preview`}
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                      )}

                      <div className="card-body d-flex flex-column">
                        <h3 className="h4 fw-bold">
                          {project.repoUrl ? (
                            <a
                              className="text-primary text-decoration-underline"
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p className="fw-semibold mb-3">
                          {project.description[locale]}
                        </p>

                        <p className="fw-bold mb-2">{text.madeWith}</p>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((technology) => (
                            <img
                              className="project-tech-icon"
                              src={technologyIcons[technology]}
                              alt={technology}
                              title={technology}
                              key={technology}
                            />
                          ))}
                        </div>

                        {project.websiteUrl ? (
                          <a
                            className="btn bg-primary text-white border-primary fw-semibold mt-auto"
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {text.viewWebsite}
                          </a>
                        ) : (
                          <button
                            className="btn bg-primary text-white border-primary fw-semibold mt-auto"
                            type="button"
                            disabled
                          >
                            {text.viewWebsite}
                          </button>
                        )}
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>

            {showProjectScrollbar ? (
              <div
                className="project-scrollbar"
                ref={projectScrollbarTrackRef}
                onPointerDown={handleProjectScrollbarPointerDown}
                aria-hidden="true"
              >
                <div
                  className="project-scrollbar-thumb"
                  style={{
                    transform: `translateX(${projectScrollbarMetrics.thumbLeft}px)`,
                    width: `${projectScrollbarMetrics.thumbWidth}px`,
                  }}
                ></div>
              </div>
            ) : null}
          </div>
        </div>
        </section>

        {imagePreview && activePreviewImage ? (
          <div
            className="project-image-modal"
            role="dialog"
            aria-modal="true"
            aria-label={imagePreview.title}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setImagePreview(null)
              }
            }}
          >
	          <div className="project-image-modal-content">
	            {imagePreview.images.length > 1 ? (
                <>
                  <button
                    className="project-image-modal-action project-image-modal-prev"
                    type="button"
                    onClick={() => updateImagePreviewByStep(-1)}
                    aria-label={`Previous ${imagePreview.title} image`}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    className="project-image-modal-action project-image-modal-next"
                    type="button"
                    onClick={() => updateImagePreviewByStep(1)}
                    aria-label={`Next ${imagePreview.title} image`}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                </>
              ) : null}
              <img
                className="project-image-modal-image"
                src={activePreviewImage.src}
                alt={activePreviewImage.alt}
              />
            </div>
          </div>
        ) : null}

      </main>
    )
}

export default Home
