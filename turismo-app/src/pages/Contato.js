import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contato.module.css";

const Contato = () => {
  const navigate = useNavigate();
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarPopup(true);

    setTimeout(() => {
      setMostrarPopup(false);
      navigate("/");
    }, 2000); // 2 segundos antes de redirecionar
  };

  return (
    <div className={styles.contatoContainer}>
      <h2 className={styles.titulo}>🌳 FALE CONOSCO 🌳</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <div className={styles.botoes}>
          <button type="submit">Enviar</button>
          <button
            type="button"
            className={styles.botaoVoltar}
            onClick={() => navigate("/")}
          >
            ← Voltar
          </button>
        </div>
      </form>

      {mostrarPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <p>Mensagem enviada com sucesso!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contato;
