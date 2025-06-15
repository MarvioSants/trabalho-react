import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const loginConfirmado = localStorage.getItem("loginConfirmado");
    if (loginConfirmado === "true") {
      setPopup(true);
      localStorage.removeItem("loginConfirmado");
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentBox}>
        <h1 className={styles.titulo}>O TURISMO QUE VOCÊ NÃO CONHECE</h1>
        <nav>
          <Link to="/destinos">Destinos</Link>
          <Link to="/sabermais">Saber Mais</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>

      {popup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h3>Login realizado com sucesso!</h3>
            <p>Seja bem-vindo(a) novamente.</p>
            <button onClick={() => setPopup(false)} className={styles.popupButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
