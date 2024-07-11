import React from "react";
import { Link } from "react-router-dom";

const BtnLinks = () =>{

    return(
        <>
               <Link to="/experiencia" className="tui-button white-168" >Experiencia</Link>
                <Link className="tui-button green-168">Educação</Link>
                <Link className="tui-button red-168">Certifiações</Link>
                <Link className="tui-button blue-168">Premiações</Link>
                <Link className="tui-button purple-168">Idiomas</Link>
                <Link className="tui-button cyan-168">Curriculo normal</Link>
                </>
    )
}

export default BtnLinks;