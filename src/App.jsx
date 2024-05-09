import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes} from "react-router-dom";
import viteLogo from '/vite.svg';
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Content from './components/content/content'
import About from './components/page/about'
import Projects from './components/page/projects'
import Services from './components/page/services'
import Contact from './components/page/contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <div className='grid-container'> 
      <Header/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
