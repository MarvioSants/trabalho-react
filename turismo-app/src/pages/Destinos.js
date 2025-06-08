import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Destinos.module.css";
import App from "../App";

const destinosDisponiveis = [
  {
    nome: "Lençois Maranhenses",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg",
    descricao: "Paisagem única de dunas e lagoas cristalinas que se formam com as chuvas no coração do Maranhão.",
    precos: "R$ 2100"
  },
  {
    nome: "Chapada das Mesas",
    imagem: "https://guiaviajarmelhor.com.br/wp-content/uploads/2022/05/chapada-das-mesas.jpg",
    descricao: "Cenário deslumbrante de montanhas, rios e cachoeiras esculhidos na pedra vermelha do sul do Maranhão.",
    precos: "R$ 2100"
  },
  {
    nome: "Carolina",
    imagem: "https://api.dhagesturismo.com.br/files/576cdf1efe786a68f497cebc806d9aba.jpg",
    descricao: "Carolina é a porta de entrada para a Chapada das Mesas, unindo natureza exuberante e aventuras no sul do Maranhão.",
    precos: "R$ 2100"
  },
];

const Destinos = () => {
  
  const navigate = useNavigate();

  const reservarDestino = (destino) => {
    navigate("/reserva", { state: { destino } });
  };

  

  return (
    
    <div className={styles.destinosContainer}>
      
      <h2>Escolha o seu próximo destino!</h2>
      
      <div className={styles.listaDestinos}>
        {destinosDisponiveis.map((destino, index) => (
          
          <div key={index} className={styles.destinoCard} onClick={() => reservarDestino(destino)}>
            <img src={destino.imagem} alt={destino.nome} />
            <h3>{destino.nome}</h3>
            <p>{destino.descricao}</p>
            <hr className={styles.linha} />
            <div className={styles.preco}>
              <p>À partir de</p>
              <h3>{destino.precos}</h3>
            </div>
            <button onClick={() =>  reservarDestino(destino)} className={styles.btnReservar}>Reservar agora!</button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Destinos;
