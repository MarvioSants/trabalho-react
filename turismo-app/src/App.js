import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import SaberMais from "./pages/SaberMais";
import Contato from "./pages/Contato";
import Destinos from "./pages/Destinos";
import ReservaForm from "./pages/ReservaForm";
import MinhasReservas from "./pages/MinhasReservas";
import EditReserva from "./pages/EditReserva"

let current_page = "";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sabermais" element={<SaberMais />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/reserva" element={<ReservaForm />} />
        <Route path="/minhasreservas" element={<MinhasReservas />} />
        <Route path="/Editreserva" element={<EditReserva />} />
      </Routes>
    </Router>
  );
};

export default App;
