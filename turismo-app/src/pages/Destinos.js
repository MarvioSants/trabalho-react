import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Destinos.module.css";

const destinosDisponiveis = [
  {
    nome: "Amazônia",
    imagem: "https://via.placeholder.com/200",
    descricao: "Explore a floresta tropical e sua biodiversidade única.",
  },
  {
    nome: "Chapada dos Veadeiros",
    imagem: "https://via.placeholder.com/200",
    descricao: "Cachoeiras incríveis e natureza exuberante.",
  },
  {
    nome: "Fernando de Noronha",
    imagem: "https://via.placeholder.com/200",
    descricao: "Um paraíso de praias e vida marinha.",
  },
];

const Destinos = () => {
  const navigate = useNavigate();

  const reservarDestino = (destino) => {
    navigate("/reserva", { state: { destino } });
  };

  return (
    <div className={styles.destinosContainer}>
      <h2>Escolha seu destino</h2>
      <div className={styles.listaDestinos}>
        {destinosDisponiveis.map((destino, index) => (
          <div key={index} className={styles.destinoCard}>
            <img src={destino.imagem} alt={destino.nome} />
            <h3>{destino.nome}</h3>
            <p>{destino.descricao}</p>
            <button onClick={() => reservarDestino(destino)}>Reservar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinos;
