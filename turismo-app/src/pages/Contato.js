import React from "react";
import styles from "./Contato.module.css"; // Certifique-se de criar este arquivo CSS para estilização

const Contato = () => {
  return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
