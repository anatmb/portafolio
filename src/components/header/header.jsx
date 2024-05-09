import { NavLink } from 'react-router-dom'
import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="container-header container-fluid px-0 py-0 m-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">Portafolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">Acerca</NavLink>
                            </li>
                            <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active" to="/projects">Proyectos</NavLink>
</li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Servicios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contáctame</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;