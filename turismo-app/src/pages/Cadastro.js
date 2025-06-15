import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("cadastroConfirmado", "true");
navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Cadastro</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <input type="password" placeholder="Confirmar senha" required />
          <button type="submit">Cadastrar</button>
        </form>
        <p className={styles.linkText}>
          Já tem uma conta?{" "}
          <span className={styles.link} onClick={() => navigate("/login")}>
            Fazer login
          </span>
        </p>
        <button className={styles.botaoVoltar} onClick={() => navigate("/")}>
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
