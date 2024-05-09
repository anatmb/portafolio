import { NavLink } from 'react-router-dom'
import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="container-header container-fluid px-0 py-0 m-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Portafolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" href="/about">Acerca</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/projects">Proyectos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/services">Servicios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/contact">Contáctame</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;