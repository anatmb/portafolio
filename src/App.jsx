// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom';
// import viteLogo from '/vite.svg';
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Content from './components/content/content'

import Projects from './components/page/projects'

import Contact from './components/page/contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; 


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop /> {/* Coloca ScrollToTop aquí */}
    <div className='grid-container'>
      <Header />
      <br/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </>
  )
}

export default App
