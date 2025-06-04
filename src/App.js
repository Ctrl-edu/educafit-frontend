import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './componentes/Header.js';
import Exercises from './componentes/Exercises.js';
import Services from './componentes/Services.js';
import Blog from './componentes/Blog.js';
import Footer from './componentes/Footer.js';
import Login from './componentes/Login.js'; 
import Registro from './componentes/Registro.js';
import Perfil from "./componentes/Perfil.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Exercises />
              <Services />
              <Blog />
              <Footer />
            </>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;