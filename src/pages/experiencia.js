import React from 'react';
import Container from '../components/Container';
import '../App.css';
import BtnLinks from '../components/Links';
const Experience = () => {
 
  return (
    <>
    <div className="box tui-bg-blue-black ">

      <div className='center'>
        <Container color="green">
        
                <legend className="center white-255-text">Experiencia</legend>
                <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
                <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>

                <h3>Experiência</h3>
        <ul class="experience">
            <li>
                <div class="company">Agta Studios</div>
                <div class="position">Fullstack</div>
                <div class="date">2016 - 2019</div>
                <p>Desenvolvedor Full-Stack freelancer com várias certificações completadas. Também desenvolveu inúmeros jogos e aplicativos para indústria, comércio e entretenimento. Além disso, contribuiu para o desenvolvimento de soluções de IA durante a pandemia da Covid-19.</p>
            </li>
            <li>
                <div class="company">Bausch Lomb</div>
                <div class="position">Operator</div>
                <div class="date">2012 - 2024</div>
                <p>Operações na fabricação de lentes de contato em geral, análise de controle, auditorias internas, controle de produção, manutenção preventiva e corretiva, operação de máquinas CNC e desenvolvimento de melhorias continua.</p>
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
