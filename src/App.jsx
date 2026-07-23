import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './Pages/Home'


const bootstrapTheme = {
  '--bs-primary': '#06224a',
  '--bs-primary-rgb': '6, 34, 74',
  '--bs-link-color-rgb': '6, 34, 74',
  '--bs-body-color': '#06224a',
  '--bs-heading-color': '#06224a',
}

const seoContent = {
  en: {
    lang: 'en',
    title: 'George Aguiar | Portfolio',
    description:
      'George Aguiar is a software developer focused on artificial intelligence, robotics, automation, and web projects.',
    ogLocale: 'en_US',
  },
  pt: {
    lang: 'pt-PT',
    title: 'George Aguiar | Portefólio',
    description:
      'George Aguiar é um programador focado em inteligência artificial, robótica, automação e projetos web.',
    ogLocale: 'pt_PT',
  },
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

  useEffect(() => {
    const seo = seoContent[locale]

    document.documentElement.lang = seo.lang
    document.title = seo.title
    updateMetaContent('meta[name="description"]', seo.description)
    updateMetaContent('meta[property="og:title"]', seo.title)
    updateMetaContent('meta[property="og:description"]', seo.description)
    updateMetaContent('meta[property="og:locale"]', seo.ogLocale)
    updateMetaContent('meta[name="twitter:title"]', seo.title)
    updateMetaContent('meta[name="twitter:description"]', seo.description)
  }, [locale])

  return (
    <div
      className="bg-white text-primary min-vh-100 d-flex flex-column"
      style={bootstrapTheme}
    >
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <Home locale={locale} />
      <Footer locale={locale} />
    </div>
  )
}

export default App
