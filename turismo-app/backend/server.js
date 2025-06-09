const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://Turismo_sustentavel:Turismosustentavel123@cluster0.2etpn5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));


const reservaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  destino: { type: String, required: true },
  data: { type: String, required: true },
  pessoas: { type: Number, required: true },
  status: { type: String, default: "Ativo" },
}, { timestamps: true });

const Reserva = mongoose.model("Reserva", reservaSchema);

app.get("/", (req, res) => {
  res.send("API está rodando!");
});

app.post("/reservas", async (req, res) => {
  try {
    const novaReserva = new Reserva(req.body);
    await novaReserva.save();
    res.status(201).json(novaReserva);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao salvar reserva", erro: error });
  }
});

// Buscar todas as reservas
app.get("/reservas", async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar reservas" });
  }
});

// Cancelar (atualizar status)
app.put("/reservas/:id/cancelar", async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelado" },
      { new: true }
    );
    if (!reserva) {
      return res.status(404).json({ mensagem: "Reserva não encontrada" });
    }
    res.json({ mensagem: "Reserva cancelada com sucesso!", reserva });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao cancelar reserva" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});