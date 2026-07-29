import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Business from './Pages/Business'
import Home from './Pages/Home'


const bootstrapTheme = {
  '--bs-primary': '#06224a',
  '--bs-primary-rgb': '6, 34, 74',
  '--bs-link-color-rgb': '6, 34, 74',
  '--bs-body-color': '#06224a',
  '--bs-heading-color': '#06224a',
}

// Change to 'home' to make the original portfolio the root page again.
const mainPage = 'business'

const seoContent = {
  home: {
    en: {
      lang: 'en',
      title: 'George Aguiar',
      description:
        'George Aguiar is a software developer focused on artificial intelligence, robotics, automation, and web projects.',
      ogLocale: 'en_US',
    },
    pt: {
      lang: 'pt-PT',
      title: 'George Aguiar',
      description:
        'George Aguiar é um programador focado em inteligência artificial, robótica, automação e projetos web.',
      ogLocale: 'pt_PT',
    },
  },
  business: {
    en: {
      lang: 'en',
      title: 'George Aguiar | Business Websites',
      description:
        'George Aguiar builds websites for small businesses across Portugal, with 2 years of experience.',
      ogLocale: 'en_US',
    },
    pt: {
      lang: 'pt-PT',
      title: 'George Aguiar | Websites para Negócios',
      description:
        'George Aguiar cria websites para pequenos negócios em Portugal, com 2 anos de experiência.',
      ogLocale: 'pt_PT',
    },
  },
}

const pages = {
  home: {
    Component: Home,
    seo: seoContent.home,
    showAboutLink: true,
  },
  business: {
    Component: Business,
    seo: seoContent.business,
    showAboutLink: false,
  },
}

function getActivePageKey() {
  if (typeof window === 'undefined') {
    return mainPage
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const routes = {
    '/': mainPage,
    '/business': 'business',
    '/home': 'home',
  }

  return routes[pathname] ?? mainPage
}

function updateMetaContent(selector, content) {
  const metaElement = document.head.querySelector(selector)

  if (metaElement) {
    metaElement.setAttribute('content', content)
  }
}

function getInitialLocale() {
  if (typeof navigator === 'undefined') {
    return 'en'
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  return browserLanguages.some((language) =>
    language?.toLowerCase().startsWith('pt'),
  )
    ? 'pt'
    : 'en'
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale)
  const activePage = pages[getActivePageKey()] ?? pages[mainPage]
  const ActivePage = activePage.Component

  useEffect(() => {
    const seo = activePage.seo[locale]

    document.documentElement.lang = seo.lang
    document.title = seo.title
    updateMetaContent('meta[name="description"]', seo.description)
    updateMetaContent('meta[property="og:title"]', seo.title)
    updateMetaContent('meta[property="og:description"]', seo.description)
    updateMetaContent('meta[property="og:locale"]', seo.ogLocale)
    updateMetaContent('meta[name="twitter:title"]', seo.title)
    updateMetaContent('meta[name="twitter:description"]', seo.description)
  }, [activePage.seo, locale])

  return (
    <div
      className="bg-white text-primary min-vh-100 d-flex flex-column"
      style={bootstrapTheme}
    >
      <Navbar
        locale={locale}
        onLocaleChange={setLocale}
        showAboutLink={activePage.showAboutLink}
      />
      <ActivePage locale={locale} />
      <Footer locale={locale} />
    </div>
  )
}

export default App
