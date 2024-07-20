import React from "react";
import Container from "../components/Container";
import BtnLinks from "../components/Links";

const Certificacao = () => {
  return (
    <>
    <div className="box tui-bg-red-black ">

      <div className='center'>
        <Container color="blue">
        
                <legend className="center white-255-text">Certificações</legend>
                <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
                <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>

               
               
            <fieldset className="tui-fieldset">
                <table className="tui-table striped-purple">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Emissor</th>
                            <th>Nome</th>
                            <th>Emissor</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
        <td>Certificado Profissional Full-Stack software Engineer</td>
        <td>Meta (Facebook)</td>
        <td>Certificado Profissional Desenvolvedor Front-End</td>
        <td>Meta (Facebook)</td>
    </tr>
    <tr>
        <td>Certificado Profissional Desenvolvedor Back-End</td>
        <td>Meta (Facebook)</td>
        <td>Certificado Profissional de Suporte em TI</td>
        <td>Google</td>
    </tr>
    <tr>
        <td>Google Play Store Listing</td>
        <td>Google</td>
        <td>JavaScript Algorithms and Data Structures</td>
        <td>Free Code Camp</td>
    </tr>
    <tr>
        <td>Responsive Web Design</td>
        <td>Free Code Camp</td>
        <td>Fundamentals of game development concept</td>
        <td>Open2Study</td>
    </tr>
    <tr>
        <td>Learn PHP</td>
        <td>Codecademy</td>
        <td>Bootcamp 2023 - Fullstack Java+Angular</td>
        <td>DIO</td>
    </tr>
    <tr>
        <td>FREE OPENCV BOOTCAMP</td>
        <td>OpenCV</td>
        <td>Learn JavaScript</td>
        <td>Codecademy</td>
    </tr>
    <tr>
        <td>Scrum Foundation Professional Certification</td>
        <td>CertiProf</td>
        <td>API Product Manager</td>
        <td>API Academy</td>
    </tr>
    <tr>
        <td>Foundational C# Microsoft certificate</td>
        <td>Microsoft - Freecodecamp</td>
        <td></td>
        <td></td>
    </tr>
                    </tbody>
                </table>
            </fieldset>
        
               
              
                <BtnLinks />
             
                <div className="tui-fieldset-text">Text format: UTF-8</div>
                <div className="tui-fieldset-text right">Ln: 2, Col: 5</div>
            
        </Container>
       
      </div>
      
     
    </div>
   

    </>
  )
};

export default Certificacao;