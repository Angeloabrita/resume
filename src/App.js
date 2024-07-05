import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar />
    <Routes>
     
    <Route path='/' element={<Home />} ></Route>
    </Routes>
    </>
  );
}

export default App;
