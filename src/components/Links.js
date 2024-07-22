import React from "react";
import { Link } from "react-router-dom";

const BtnLinks = () =>{

    return(
        <div className="center">
                <Link to="/" className="tui-button yellow-168" >Resumo</Link>
                <Link to="/experiencia" className="tui-button white-168" >Experiencia</Link>
                <Link to="/educacao" className="tui-button green-168">Educação</Link>
                <Link to="/certificacoes" className="tui-button red-168">Certificações</Link>
                <Link to="/premiacoes" className="tui-button blue-168">Premiações</Link>
                <Link to="/idiomas" className="tui-button purple-168">Idiomas</Link>
                <Link to="/curriculum" className="tui-button cyan-168">Curriculo completo</Link>
        </div>
    )
}

export default BtnLinks;