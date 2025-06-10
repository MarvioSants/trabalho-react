import React, { useEffect, useState } from "react";
import styles from "./MinhasReservas.module.css";

import { useNavigate } from 'react-router-dom';

const MinhasReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch("http://localhost:3000/reservas");
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservas();
  }, []);

  
  const navigate = useNavigate();

  const cancelarReserva = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/reservas/${id}/cancelar`, {
        method: "PUT",
      });

      if (response.ok) {
        const data = await response.json();
        setReservas((prev) =>
          prev.map((res) => (res._id === id ? data.reserva : res))
        );
      } else {
        alert("Erro ao cancelar a reserva.");
      }
    } catch (error) {
      console.error("Erro ao cancelar:", error);
    }
  };

    // Atualiza campos do formulário
    const atualizarReserva = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/reservas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setReservas((prev) =>
          prev.map((res) => (res._id === id ? data.reserva : res))
        );
        setEditando(null); // Sai do modo edição
      } else {
        alert("Erro ao atualizar a reserva.");
      }
    } catch (error) {
      console.error("Erro ao editar:", error);
    }
  };
  const editRoute = () => {
    navigate('/editreserva');
  };

  return (
    <div className={styles.reservasContainer}>
      <h2>Minhas Reservas</h2>
      {loading ? (
        <p>Carregando reservas...</p>
      ) : reservas.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <ul>
          {reservas.map((reserva) => (
            <li key={reserva._id}>
              <strong>{reserva.nome}</strong> - {reserva.destino} - {reserva.data} - Pessoas: {reserva.pessoas} - <em>Status: {reserva.status}</em>
              {reserva.status !== "Cancelado" && (<button onClick={editRoute}>Editar</button>)}
              {reserva.status !== "Cancelado" && (
                <button onClick={() => cancelarReserva(reserva._id)}>Cancelar</button>
              )}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MinhasReservas;
