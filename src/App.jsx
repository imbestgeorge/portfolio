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
    document.documentElement.lang = locale
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
