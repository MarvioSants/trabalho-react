import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Destinos.module.css";

const destinosDisponiveis = [
  {
    nome: "Amazônia",
    imagem: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/12-gui-gomes.jpg?w=1900&h=1267",
    descricao: "Explore a floresta tropical e sua biodiversidade única.",
  },
  {
    nome: "Chapada dos Veadeiros",
    imagem: "https://www.vamostrilhar.com.br//wp-content/uploads/2017/09/Cachoeira-Santa-B%C3%A1rbara-melhores-atrativos-da-Chapada-dos-Veadeiros-GO-Vamos-Trilhar.webp",
    descricao: "Cachoeiras incríveis e natureza exuberante.",
  },
  {
    nome: "Fernando de Noronha",
    imagem: "https://viagem.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/06/mirante-fernando-de-noronha-daniela-filomeno.gif",
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
