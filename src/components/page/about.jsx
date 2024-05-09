import React from 'react'
import { NavLink } from 'react-router-dom'
import imagen from '../../assets/about.jpg';
import imagen2 from '../../assets/responsive-web-design.png';
import './about.css'
import { useNavigate } from 'react-router-dom';

function about() {

  const navigate = useNavigate();

  const redirectToContactPage = () => {
    navigate('/contact'); // Reemplaza '/contact' con la ruta a tu página de contacto
  };



  const redirectToServicesPage = () => {
    navigate('/services'); // Reemplaza '/services' con la ruta a tu página de servicios
  };


  return (
    <main className="container-about">
            <div className='row'>

            <div className='col-lg-6 right-about '>
          <img className="photo-about" src={imagen} alt="" />
        </div>
        <div className='col-lg-6 left-about p-4'>

          <h1 className='title-about'>
            Hola!</h1>
          <p className='paragraph-about align-items-center ' >Soy una apasionada desarrolladora web con una conexión única entre la tecnología y mi amor
            por viajar.  Además de codificar, disfruto explorando nuevos lugares con mi hijo,
            fusionando mi mundo digital con las maravillas del mundo real.
          </p>
          <p className='paragraph-about' >
            Mi rol de madre agrega una perspectiva valiosa a mi vida, equilibrando el
            código con las alegrías cotidianas de ser mamá.</p>
          <br />
          <div className="d-flex align-items-center"> {/* Contenedor para alinear horizontalmente los elementos */}
            <button className="btn custom-btn-secondary px-5" onClick={redirectToContactPage}>Contáctame</button>
          </div>
        </div>
    

      </div>

      <div className='row'>
   
        <div className='col-lg-6 left-main p-4'>

          <h1 className='title-main'>
            Te garantizo</h1>
          <p className='paragraph-main' >Que al elegir mis servicios, puedes esperar un sitio web que no solo impresionará a tus visitantes desde el primer momento, sino que también estará optimizado para la velocidad, la accesibilidad y el SEO.</p>
          <p className='paragraph-main' >Trabajo en estrecha colaboración contigo para comprender tus necesidades específicas y garantizar que el producto final refleje la identidad y los objetivos de tu marca.</p>

          <br />
          <div className="d-flex align-items-center"> {/* Contenedor para alinear horizontalmente los elementos */}
            <button className="btn custom-btn-primary px-5" onClick={redirectToServicesPage}>Servicios</button>

          </div>
        </div>
        <div className='col-lg-6 left-about '>
          <img className="photo-main" src={imagen2} alt="" />
        </div>
       
      </div>



    </main>
  )
}

export default about