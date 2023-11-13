const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb-client');
const cors = require('cors')
const app = express();

app.use(cors());
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/torneoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  wtimeout: 60000, // Set timeout to 30 seconds
});

// Definir el esquema del equipo
const equipoSchema = new mongoose.Schema({
  nombreEquipo: String,
  facultad: String,
  anioCiclo: String,
  torneo: String,
  jugadores: [
    {
      carnet: String,
      nombres: String,
      apellidos: String,
      fechaNacimiento: String,
      genero: String,
      posicion: String,
      numeroCamisa: String,
    },
  ],
});

const Equipo = mongoose.model('Equipo', equipoSchema);

app.use(bodyParser.json());

// Ruta para registrar un equipo (POST)
app.post('/equipos', async (req, res) => {
  try {
    const equipo = new Equipo(req.body);
    await equipo.save();
    res.status(201).json({ mensaje: 'Equipo registrado con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al registrar el equipo' });
  }
});

// Ruta para obtener todos los equipos (GET)
app.get('/equipos', async (req, res) => {
  try {
    const equipos = await Equipo.find();
    res.status(200).json(equipos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
