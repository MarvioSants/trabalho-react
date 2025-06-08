import React, { useState } from "react";
import styles from "./Reservas.module.css"; // Certifique-se de criar este arquivo CSS para estilização



const Reservas = () => {
  const [reservas, setReservas] = useState([
    "Viagem para Amazônia",
    "Passeio na Chapada dos Veadeiros",
  ]);

  const cancelarReserva = (index) => {
    const novasReservas = reservas.filter((_, i) => i !== index);
    setReservas(novasReservas);
  };

  
  

  return (
    <div className="reservas-container">
      <h2>Minhas Reservas</h2>
      <ul>
        {reservas.map((reserva, index) => (
          <li key={index}>
            {reserva}
            <button onClick={() => cancelarReserva(index)}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;
