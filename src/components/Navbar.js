import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="tui-nav">
        <ul>
            <li className="tui-dropdown">
                <span className="red-168-text">F</span>ile
                <div className="tui-dropdown-content">
                <ul>
                        <li><Link to="/"><span className="red-168-text">I</span>nicio</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/curriculum"><span className="red-168-text">R</span>esumo completo</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/experiencia"><span className="blue-168-text">E</span>xperiencia</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/educacao"><span className="green-168-text">E</span>ducação</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/certificacoes"><span className="red-168-text">C</span>ertificações</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/premiacoes"><span className="blue-168-text">P</span>remiações</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/idiomas"><span className="green-168-text">I</span>diomas</Link></li>
                    </ul>
                </div>

                
            </li>
            <li>
                <a href="https://github.com/Angeloabrita" target="_blank" rel="noreferrer"><span className="red-168-text">G</span>itHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/angelo-gabriel-tavares-abrita" target="_blank" rel="noreferrer"><span className="blue-168-text">L</span>inkedin</a>
            </li>
           
        </ul>
        <span className="tui-datetime" data-format="h:m:s a"></span>

    </nav>
    )
}

export default Navbar;