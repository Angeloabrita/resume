import React from 'react';

const Curriculum = () => {
  return (
   
    <div className="tui-bg-orange-white container">
        <h1>Angelo Abrita</h1>
        <h2>Desenvolvedor Fullstack (back e front end)</h2>
        <div className="contact">
            <i className="fas fa-map-marker-alt"></i> Criciúma - SC
            <i className="fas fa-phone"></i> 51 99906-8864
            <i className="fas fa-envelope"></i> angeloabrita@gmail.com
        </div>
        <div className="profile-links">
            <a href="https://www.linkedin.com/in/angelo-gabriel-tavares-abrita/" target="_blank" rel="noreferrer">Linkedin</a>
            <a href="https://github.com/Angeloabrita" target="_blank" rel="noreferrer">Github</a>
        </div>

        <h3>Resumo</h3>
        <p>Desenvolvedor full-stack com 11 anos de experiência em operações de manufatura e 5 anos em desenvolvimento de software. Poliglota em linguagem de programação com conhecimento em C#, PHP, Java e Kotlin com foco em desenvolvimento web e mobile. Além de conhecimento de básicos em inteligência artificial e visão computacional. Desenvolvi projetos de impacto social durante a pandemia da Covid-19, incluindo um app de detecção de máscaras com machine learning e um bot de informações sobre a pandemia. Além disso, estou constantemente aprimorando minhas habilidades em boas práticas de desenvolvimento, seguindo os princípios de DDD, SOLID e TDD.</p>

        <h3>Experiência</h3>
        <ul className="experience">
            <li>
                <div className="company">Agta Studios</div>
                <div className="position">Fullstack</div>
                <div className="date">2016 - 2019</div>
                <p>Desenvolvedor Full-Stack freelancer com várias certificações completadas. Também desenvolveu inúmeros jogos e aplicativos para indústria, comércio e entretenimento. Além disso, contribuiu para o desenvolvimento de soluções de IA durante a pandemia da Covid-19.</p>
            </li>
            <li>
                <div className="company">Bausch Lomb</div>
                <div className="position">Operator</div>
                <div className="date">2012 - 2024</div>
                <p>Operações na fabricação de lentes de contato em geral, análise de controle, auditorias internas, controle de produção, manutenção preventiva e corretiva, operação de máquinas CNC e desenvolvimento de melhorias continua.</p>
            </li>
        </ul>

        <h3>Educação</h3>
        <ul className="education">
            <li>
                <div className="institution">Uninter</div>
                <div className="degree">Tecnologo</div>
                <div className="date">2013 - 2015</div>
                <p>Gestão da produção industrial</p>
            </li>
            <li>
                <div className="institution">CENTRO UNIVERSITÁRIO ANHANGUERA PITÁGORAS AMPLI</div>
                <div className="degree">Bacharel</div>
                <div className="date">2022 - 2025</div>
                <p>Engenharia de software</p>
            </li>
            <li>
                <div className="institution">University of the People</div>
                <div className="degree">Associate’s Degree( Graduação)</div>
                <div className="date">2023 - 2025</div>
                <p>Computer Science</p>
            </li>
        </ul>

        <h3>Certificações</h3>
        <ul className="certifications">
            <li>
                <div className="certification">Certificado Profissional Full-Stack software Engineer</div>
                <div className="issuer">Meta(Facebook)</div>
            </li>
            <li>
                <div className="certification">Certificado Profissional Desenvolvedor Front-End</div>
                <div className="issuer">Meta (Facebook)</div>
            </li>
            <li>
                <div className="certification">Certificado Profissional Desenvolvedor Back-End</div>
                <div className="issuer">Meta (Facebook)</div>
            </li>
            <li>
                <div className="certification">Certificado Profissional de Suporte em TI</div>
                <div className="issuer">Google</div>
            </li>
            <li>
                <div className="certification">Google Play Store Listing</div>
                <div className="issuer">Google</div>
            </li>
            <li>
                <div className="certification">JavaScript Algorithms and Data Structures</div>
                <div className="issuer">Free Code Camp</div>
            </li>
            <li>
                <div className="certification">Responsive Web Design</div>
                <div className="issuer">Free Code Camp</div>
            </li>
            <li>
                <div className="certification">Fundamentals of game development concept</div>
                <div className="issuer">Open2Study</div>
            </li>
            <li>
                <div className="certification">Learn PHP</div>
                <div className="issuer">Codecademy</div>
            </li>
            <li>
                <div className="certification">Bootcamp 2023 - Fullstack Java+Angular</div>
                <div className="issuer">DIO</div>
            </li>
            <li>
                <div className="certification">FREE OPENCV BOOTCAMP</div>
                <div className="issuer">OpenCV</div>
            </li>
            <li>
                <div className="certification">Learn JavaScript</div>
                <div className="issuer">CodeCademy</div>
            </li>
            <li>
                <div className="certification">Scrum Foundation Professional Certification</div>
                <div className="issuer">CertiProf</div>
                <div className="date">2024</div>
            </li>
            <li>
                <div className="certification">API Product Manager</div>
                <div className="issuer">API Academy</div>
            </li>
            <li>
                <div className="certification">Foundational C# Microsoft certificate</div>
                <div className="issuer">Microsoft - Freecodecamp</div>
            </li>
        </ul>

        <h3>Habilidades</h3>
        <div className="skills">
            <span>C#</span>
            <span>PHP</span>
            <span>Java</span>
            <span>Kotlin</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SQL</span>
            <span>Machine Learning</span>
            <span>Computer Vision</span>
        </div>

        <h3>Premiações</h3>
        <ul className="awards">
            <li>Excellence award small plant - Bausch Lomb</li>
            <li>Excelência operacional e trabalho em equipe - Bausch Lomb</li>
        </ul>

        <h3>Idiomas</h3>
        <ul className="languages">
            <li>English - B1-IELTS | C1-EF/SET</li>
        </ul>

    </div>
  );
};

export default Curriculum;