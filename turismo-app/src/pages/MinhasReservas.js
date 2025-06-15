import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MinhasReservas.module.css";

const MinhasReservas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [popupMensagem, setPopupMensagem] = useState("");
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    if (location.state?.popupMensagem) {
      setPopupMensagem(location.state.popupMensagem);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch("http://localhost:3000/reservas");
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  const fecharPopup = () => {
    setPopupMensagem("");
    window.history.replaceState({}, document.title);
  };

  const cancelarReserva = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/reservas/${id}/cancelar`, {
        method: "PUT",
      });

      const data = await response.json();
      setReservas((prev) =>
        prev.map((res) => (res._id === id ? data.reserva : res))
      );
    } catch (error) {
      alert("Erro ao cancelar reserva.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Minhas Reservas</h2>

      {popupMensagem && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <p>{popupMensagem}</p>
            <button onClick={fecharPopup} className={styles.botaoFechar}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {reservas.length === 0 ? (
        <div className={styles.reservasVazias}>
          <p>Nenhuma reserva cadastrada.</p>
        </div>
      ) : (
        <ul className={styles.listaReservas}>
          {reservas.map((reserva) => (
            <li key={reserva._id} className={styles.reservaItem}>
              <strong>{reserva.destino}</strong> - {reserva.data} <br />
              <em>Status:</em> {reserva.status} <br />
              <button
                onClick={() => cancelarReserva(reserva._id)}
                disabled={reserva.status === "Cancelado"}
                className={styles.botaoCancelar}
              >
                Cancelar
              </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => navigate("/")} className={styles.botaoVoltar}>
        ← Voltar
      </button>
    </div>
  );
};

export default MinhasReservas;
