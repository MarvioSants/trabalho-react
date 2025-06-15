import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SaberMais.module.css";

const SaberMais = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sabermaisContainer}>
      <div className={styles.caixaTexto}>
        <h2>Turismo Sustentável</h2>
         <p>
          O turismo sustentável é uma prática que visa equilibrar o desenvolvimento econômico com a conservação ambiental e o respeito às comunidades locais. Ao optar por experiências responsáveis, o viajante contribui para:
        </p>
        <ul>
          <li><strong>Preservação do meio ambiente:</strong> uso consciente de recursos naturais.</li>
          <li><strong>Valorização cultural:</strong> apoio a tradições e produtores locais.</li>
          <li><strong>Desenvolvimento social:</strong> geração de renda e oportunidades.</li>
        </ul>
        <h3>Práticas recomendadas</h3>
        <p>
          Para tornar sua viagem mais sustentável, considere as seguintes ações:
        </p>
        <ul>
          <li>Escolher acomodações certificadas.</li>
          <li>Usar transporte coletivo ou caminhar.</li>
          <li>Consumir produtos locais.</li>
          <li>Evitar plásticos descartáveis.</li>
          <li>Respeitar normas ambientais.</li>
        </ul>
         <h3>Benefícios para você e para o planeta</h3>
        <p>
          Além de vivenciar experiências autênticas, o turismo sustentável promove bem-estar ao ar livre, reforça conexões culturais e contribui para a conservação de ambientes naturais únicos. Ao viajar com responsabilidade, você deixa um legado positivo para as próximas gerações.
        </p>
        <button className={styles.botaoVoltar} onClick={() => navigate("/")}>
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default SaberMais;
