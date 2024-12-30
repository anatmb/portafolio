import React from 'react'
import './footer.css'

function footer() {
    return (
        <footer>
            <div className='row container-footer'>
                <div className='col-lg-9 d-flex col-left justify-content-start align-items-center '>
                    © 2024 Anadeska Meléndez - Todos los derechos reservados
                </div>
                <div className='col-lg-3 col-right pt-2' >
                    <ul className="list-unstyled d-flex justify-content-center align-items-center">
                        <li className="me-3">
                            <a href="https://github.com/anatmb" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer