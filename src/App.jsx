import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import SkillsPage from './pages/Skills'
import ProjectsPage from './pages/Projects'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Header from './components/Header'
import DarkModeSwitch from './components/DarkModeSwitch'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <DarkModeSwitch />
      <Header />

      <div className="wrapper-container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='skills' element={<SkillsPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
