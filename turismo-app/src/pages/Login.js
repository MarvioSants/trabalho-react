import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const confirmado = localStorage.getItem("cadastroConfirmado");
    if (confirmado === "true") {
      setPopup(true);
      localStorage.removeItem("cadastroConfirmado");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("loginConfirmado", "true");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p className={styles.linkText}>
          Não tem uma conta?{" "}
          <span className={styles.link} onClick={() => navigate("/cadastro")}>
            Cadastre-se
          </span>
        </p>
        <button className={styles.botaoVoltar} onClick={() => navigate("/")}>
          ← Voltar
        </button>
      </div>

      {popup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h3>Cadastro realizado com sucesso!</h3>
            <p>Você já pode fazer login com seus dados.</p>
            <button onClick={() => setPopup(false)} className={styles.popupButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
