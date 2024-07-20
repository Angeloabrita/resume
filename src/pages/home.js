import React from 'react';
import Container from '../components/Container';
import '../App.css';
import BtnLinks from '../components/Links';
const Home = () => {

 
 
  return (
    <>
    <div className="box tui-bg-blue-black  ">

      <div className='center'>
        <Container color="orange">
        
                <legend className="center white-255-text">Resumo</legend>
                <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
                <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>
                
Desenvolvedor full-stack com 11 anos de experiência em operações de manufatura e 5 anos em desenvolvimento de software. Poliglota em linguagem de programação com conhecimento em C#, PHP, Java e Kotlin com foco em desenvolvimento web e mobile. Além de conhecimento de básicos em inteligência artificial e visão computacional. Desenvolvi projetos de impacto social durante a pandemia da Covid-19, incluindo um app de detecção de máscaras com machine learning e um bot de informações sobre a pandemia. Além disso, estou constantemente aprimorando minhas habilidades em boas práticas de desenvolvimento, seguindo os princípios de DDD, SOLID e TDD.<br />


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

export default Home;
