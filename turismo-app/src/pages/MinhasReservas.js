import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./MinhasReservas.module.css";

const MinhasReservas = () => {
  const location = useLocation();
  const novaReserva = location.state || null;
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const reservasSalvas = JSON.parse(localStorage.getItem("reservas")) || [];

    if (
      novaReserva &&
      !reservasSalvas.some((res) => res.destino === novaReserva.destino)
    ) {
      reservasSalvas.push(novaReserva);
      localStorage.setItem("reservas", JSON.stringify(reservasSalvas));
    }

    setReservas(reservasSalvas);
  }, [novaReserva]);

  const cancelarReserva = (index) => {
    const novasReservas = reservas.filter((_, i) => i !== index);
    localStorage.setItem("reservas", JSON.stringify(novasReservas));
    setReservas(novasReservas);
  };

  return (
    <div className={styles.reservasContainer}>
      <h2>Minhas Reservas</h2>
      {reservas.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <ul>
          {reservas.map((reserva, index) => (
            <li key={index}>
              {reserva.destino} - {reserva.nome} - {reserva.data} -{" "}
              {reserva.status}
              <button onClick={() => cancelarReserva(index)}>Cancelar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MinhasReservas;
