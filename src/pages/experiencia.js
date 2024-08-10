import React from 'react';
import Container from '../components/Container';
import '../App.css';
import BtnLinks from '../components/Links';
const Experience = () => {
 
  return (
    <>
    <div className="box tui-bg-blue-black ">

      <div className='center'>
        <Container color="white">
        
                <legend className="center white-255-text">Experiencia</legend>
                <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
                <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>

                <h3>Experiência</h3>
        <ul className="experience">
            <li>
                <div className="company  white-255-text">Agta Studios</div>
                <div className="position">Fullstack</div>
                <div className="date">2016 - 2019</div>
                <p>Atuando como Desenvolvedor Full-Stack freelancer na AGTA Studios (2016 - 2019), aprimorei minhas habilidades em desenvolvimento web e mobile, utilizando linguagens como C#, PHP, Java e Kotlin. Desenvolvi projetos desafiadores para clientes em diversos setores, incluindo jogos, aplicativos para indústria e comércio, e soluções inovadoras com inteligência artificial. Durante a pandemia, contribuí com projetos de impacto social, como um aplicativo de detecção de máscaras com machine learning e um bot de informações sobre a Covid-19.</p>
            </li>
            <li>
                <div className="company  white-255-text">Bausch Lomb</div>
                <div className="position">Operator</div>
                <div className="date">2012 - 2024</div>
                <p>
                Durante minha trajetória como Operador de Produção na Bausch Lomb (2012 - 2024), contribuí para a produção eficiente de lentes de contato, garantindo a qualidade e o cumprimento dos prazos. Atuando em diversas áreas, como controle de produção, manutenção preventiva e corretiva, e operação de máquinas CNC, desenvolvi um profundo conhecimento dos processos produtivos. Essa experiência me proporcionou uma base sólida para a minha transição para o desenvolvimento de software, pois me ensinou a pensar de forma analítica, a resolver problemas complexos e a trabalhar em equipe para alcançar objetivos comuns.
                </p>
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

export default Experience;
