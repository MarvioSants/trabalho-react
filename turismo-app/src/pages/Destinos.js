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
  {
    nome: "Pantanal",
    imagem: "https://deih43ym53wif.cloudfront.net/pantanal-brazil_c73b8c6554.jpeg",
    descricao: "A maior planície alagada do mundo, ideal para ecoturismo.",
  },
  {
    nome: "Serra Gaúcha",
    imagem: "https://th.bing.com/th/id/R.a97e1abe4c024dcf0033f716395c5906?rik=OklqKY%2bKFqT4aA&pid=ImgRaw&r=0",
    descricao: "Clima europeu, gastronomia e cidades charmosas como Gramado.",
  },
  {
    nome: "Lençóis Maranhenses",
    imagem: "https://th.bing.com/th/id/R.8ab484f42fa80c4dd202273da49cee3a?rik=NATJ7r%2bjhXryhw&riu=http%3a%2f%2f3em3.com%2fwp-content%2fuploads%2f2018%2f12%2f3em3_lencoismaranhenses03.jpg&ehk=gQG5oE9apLl7bbU1F0LkUnYDfsgDihmtySqdO%2fYV6Zc%3d&risl=&pid=ImgRaw&r=0",
    descricao: "Dunas de areia branca e lagoas cristalinas no Maranhão.",
  }
];

const Destinos = () => {
  const navigate = useNavigate();

  const reservarDestino = (destino) => {
    navigate("/reserva", { state: { destino } });
  };

  return (
    <div className={styles.destinosContainer}>
      <div className={styles.centralBox}>
        <h2 className={styles.titulo}>Escolha seu destino</h2>

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

        <button className={styles.botaoVoltar} onClick={() => navigate("/")}>
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default Destinos;
