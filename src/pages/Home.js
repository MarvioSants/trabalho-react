import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // Certifique-se de criar este arquivo CSS para estilização

const Home = () => {
  return (
    <div className="home-container">
      <h1>O TURISMO QUE VOCÊ NÃO CONHECE</h1>
      <nav>
        <Link to="/destinos">Destinos</Link>
        <Link to="/sabermais">Saber Mais</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Home;
