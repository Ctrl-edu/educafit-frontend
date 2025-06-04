import { Link } from "react-router-dom";
//import logo from '../img/educa.png';
import menuIcon from '../img/menu.png';
import '../estilos/Header.css';

const Header = () =>(
    <header className="header">
        <div className="menu container">
            <a href="#" className="logo">EDUCAFIT</a>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu">
                <img src={menuIcon} className="menu-icono" alt="Menu Icon" />
            </label>
            <nav className="navbar">
                <ul>
                    <li><Link to="/login">Accede o Registrate</Link></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
        <div className="header-content container">
            <h1>Salud & Nutricion</h1>
            <p>
            EducaFit es una plataforma innovadora diseñada para ayudarte a alcanzar tus objetivos de salud y
            bienestar...
            </p>
            <a href="#" className="btn-1">Conocer mas</a>
        </div>
    </header>
);

export default Header;