import React from "react";

const Navbar = () => {
    return (
        <nav className="tui-nav">
        <ul>
            <li className="tui-dropdown">
                <span className="red-168-text">F</span>ile
                <div className="tui-dropdown-content">
                    <ul>
                        <li><a href="#!"><span className="red-168-text">R</span>esumo</a></li>
                    </ul>

                    <ul>
                        <li><a href="#!"><span className="blue-168-text">E</span>xperiencia</a></li>
                    </ul>

                    <ul>
                        <li><a href="#!"><span className="green-168-text">E</span>ducação</a></li>
                    </ul>

                    <ul>
                        <li><a href="#!"><span className="red-168-text">C</span>ertificações</a></li>
                    </ul>

                    <ul>
                        <li><a href="#!"><span className="blue-168-text">P</span>remiações</a></li>
                    </ul>

                    <ul>
                        <li><a href="#!"><span className="green-168-text">I</span>diomas</a></li>
                    </ul>
                </div>

                
            </li>
            <li>
                <a href="#!"><span className="red-168-text">G</span>itHub</a>
            </li>
            <li>
                <a href="#!"><span className="blue-168-text">L</span>inkedin</a>
            </li>
           
        </ul>
    </nav>
    )
}

export default Navbar;