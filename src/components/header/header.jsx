import { NavLink, Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/logo1.png';

function Header() {
    const navigate = useNavigate();
    const [scrollTarget, setScrollTarget] = useState(null);

    useEffect(() => {
        if (scrollTarget) {
            const element = document.getElementById(scrollTarget);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setScrollTarget(null); // Limpiar el objetivo después de hacer scroll
        }
    }, [scrollTarget]);

    const handleScrollTo = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/');
        }
        setScrollTarget(id); // Establece el objetivo de scroll
    };

    return (
        <header className="container-header px-0 py-0 m-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => handleScrollTo('top')}>
                        <img src={logo} alt="" className='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#id-about" onClick={() => handleScrollTo('id-about')}>
                                    Acerca
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/projects">
                                    Proyectos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#id-service" onClick={() => handleScrollTo('id-service')}>
                                    Servicios
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/contact">
                                    Contáctame
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
