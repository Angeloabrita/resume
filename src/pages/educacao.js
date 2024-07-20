import React from "react";
import BtnLinks from "../components/Links";
import Container from "../components/Container";

const Educacao = () => {
  return (
    <>
    <div className="box center tui-bg-blue-black ">

      <div className='center'>
        <Container color="green">
        
                <legend className="center white-255-text">Educação</legend>
                <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
                <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>

                <ul className="education">
            <li>
                <div className="institution  white-255-text">Uninter</div>
                <div className="degree">Tecnologo</div>
                <div className="date">2013 - 2015</div>
                <p>Gestão da produção industrial</p>
            </li>
            <li>
                <div className="institution  white-255-text">CENTRO UNIVERSITÁRIO ANHANGUERA PITÁGORAS AMPLI</div>
                <div className="degree">Bacharel</div>
                <div className="date">2022 - 2025</div>
                <p>Engenharia de software</p>
            </li>
            <li>
                <div className="institution  white-255-text">University of the People</div>
                <div className="degree">Associate’s Degree( Graduação)</div>
                <div className="date">2023 - 2025</div>
                <p>Computer Science</p>
            </li>
        </ul>
                
                <br />
                <div className="tui-divider"></div>
                <br />
              
                <BtnLinks />
                <br /><br />
                <div className="tui-fieldset-text">Text format: UTF-8</div>
                <div className="tui-fieldset-text right">Ln: 2, Col: 5</div>
            
        </Container>
       
      </div>
      
     
    </div>
   

    </>
  );
};

export default Educacao;