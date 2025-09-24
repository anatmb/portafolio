
import './footer.css'
import {
  faInstagramSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        {/* <li className="me-3">
                            <a href="https://www.linkedin.com/in/anadeska-frontend/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li> */}
                        <li className="me-3">
                            <a href="https://www.instagram.com/akseweb/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer