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

function App() {
  return (
    <div
      className="bg-white text-primary min-vh-100 d-flex flex-column"
      style={bootstrapTheme}
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
