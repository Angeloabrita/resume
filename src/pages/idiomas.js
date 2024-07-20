import React from "react";
import Container from "../components/Container";
import BtnLinks from "../components/Links";

const Idiomas
 = () => {
  return (
    <>
    <div className="box tui-bg-blue-black ">

      <div className='center'>
        <Container color="orange">
        
                <legend className="center white-255-text">Resumo</legend>
                <button className="tui-fieldset-button left"><span className="green-255-text">↑</span></button>
                <button className="tui-fieldset-button"><span className="green-255-text">■</span></button>
                
                <h3>Idiomas</h3>
              <div className="languages white-255-text">
                  <h2>English - B1-IELTS | C1-EF/SET</h2>
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

export default Idiomas
;