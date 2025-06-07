import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Login;
