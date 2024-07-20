import React from "react";
import Container from "../components/Container";
import BtnLinks from "../components/Links";

const Premiacao = () => {
  return (
    <>
     <div className="box tui-bg-blue-black ">

<div className='center'>
  <Container color="green">
  
          <legend className="center white-255-text">Resumo</legend>
          <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
          <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>
          
          <h3>Premiações</h3>
        <div className="awards">
            <h3>Excellence award small plant - <span className="yellow-255-text">Bausch Lomb</span> </h3>
            <h3>Excelência operacional e trabalho em equipe - <span className="yellow-255-text">Bausch Lomb</span> </h3>
            
        </div>
          
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

export default Premiacao;