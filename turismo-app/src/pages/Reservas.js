import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReservaForm.module.css";

const ReservaForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    destino: "",
    data: "",
    pessoas: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resumo = `Reserva confirmada para ${formData.destino} em ${formData.data}`;

    navigate("/", { state: { reservaConfirmada: resumo } });
  };

  return (
    <div className={styles.reservaContainer}>
      <h2>Preencha os dados para sua reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Destino:</label>
        <select
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um destino</option>
          <option value="Amazônia">Amazônia</option>
          <option value="Chapada dos Veadeiros">Chapada dos Veadeiros</option>
          <option value="Fernando de Noronha">Fernando de Noronha</option>
          <option value="Pantanal">Pantanal</option>
          <option value="Serra Gaúcha">Serra Gaúcha</option>
          <option value="Lençóis Maranhenses">Lençóis Maranhenses</option>
        </select>

        <label>Data da viagem:</label>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
        />

        <label>Quantidade de pessoas:</label>
        <input
          type="number"
          name="pessoas"
          min="1"
          value={formData.pessoas}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirmar Reserva</button>
      </form>
      <button className={styles.botaoVoltar} onClick={() => navigate("/")}>
        ← Voltar
      </button>
    </div>
  );
};

export default ReservaForm;
