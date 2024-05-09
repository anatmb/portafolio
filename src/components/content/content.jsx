import React from 'react'
import './content.css'
import imagen from '../../assets/diseño-de-páginas-web-responsivas.jpg';
import { useNavigate } from 'react-router-dom';

function content() {

    const navigate = useNavigate();

  const redirectToServicesPage = () => {
    navigate('/services'); // Reemplaza '/services' con la ruta a tu página de servicios
  };

  const redirectToContactPage = () => {
    navigate('/contact'); // Reemplaza '/contact' con la ruta a tu página de contacto
  };

    return (
<main className="container-content">
    <div className='row'>
        <div className='col-lg-6 left-content my-5'>
            <h1 className='title-content'>
                Construyendo el Futuro Digital: Desarrollador Frontend
            </h1>
            <p className='paragraph-content'>
                Como desarrollador frontend, mi pasión radica en convertir ideas en experiencias digitales cautivadoras y funcionales. Con un enfoque en la creación de interfaces de usuario atractivas y fáciles de usar.
            </p>
            <div className="d-flex">
                <button className="btn custom-btn-primary px-4 mr-2" onClick={redirectToServicesPage}>Servicios</button>
                <button className="btn custom-btn-secondary px-4" onClick={redirectToContactPage}>Contáctame</button>
            </div>
        </div>
        <div className='col-lg-6 right-main d-flex justify-content-center align-items-center'>
            <img className="photo-content img-fluid" src={imagen} alt="" />
        </div>
    </div>
</main>
    )
}

export default content