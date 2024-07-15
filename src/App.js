import 'tuicss';


import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Experience from './pages/experiencia';
import Curriculum from './pages/curriculo';
import Educacao from './pages/educacao';
import Premiacao from './pages/premiacao';
import Idiomas from './pages/idiomas';
import Certificacao from './pages/certificacao';

function App() {
  return (
    <>
     <Navbar />
    <Routes>
     
    <Route path='/' element={<Home />} ></Route>
    <Route path='/experiencia' element={<Experience />} ></Route>
    <Route path='/curriculum' element={<Curriculum />} ></Route>
    <Route path='/educacao' element={<Educacao  />}></Route> 
    <Route path='/premiacao' element={<Premiacao  />}></Route>
    <Route path='/idiomas' element={<Idiomas  />}></Route> 
    <Route path='/certificacoes' element={<Certificacao  />}></Route> 


    </Routes>
    </>
  );
}

export default App;
