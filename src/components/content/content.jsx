import React from 'react'
import './content.css'
import imagen from '../../assets/perfil.png';
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
                <div className='col-lg-7 left-content'>
                    <h1 className='title-content'>
                        Anadeska Meléndez
                    </h1>

                    <h2 className='d-flex justify-content-left align-items-left'><span className='paragraph-nombre'> Desarrollador Frontend </span></h2>
                    <p className='paragraph-content'>
                        Como desarrollador frontend, mi pasión radica en convertir ideas en experiencias digitales cautivadoras y funcionales, con un enfoque en la creación de interfaces de usuario atractivas y fáciles de usar.
                    </p>

                    <div className='iconos'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="40" alt="angularjs logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" height="40" alt="linkedin logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" alt="redux logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" alt="sequelize logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="40" alt="bootstrap logo" />

                    </div>
                    <div className="d-flex my-5">
                        <button className="btn custom-btn-primary px-4 mr-2" onClick={redirectToServicesPage}>Servicios</button>
                        <button className="btn custom-btn-secondary px-4" onClick={redirectToContactPage}>Contáctame</button>
                    </div>
                </div>
                <div className='col-lg-5  right-content d-flex justify-content-center align-items-center'>
                    <img className="photo-content img-fluid" src={imagen} alt="" />
                </div>
            </div>
        </main>
    )
}

export default content