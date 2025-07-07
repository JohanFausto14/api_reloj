const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const sensorRoutes = require("./routes/sensorRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cambia la ruta base a /api/datos
app.use("/api/datos", sensorRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Conectado a MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Servidor escuchando en puerto ${process.env.PORT}`);
        });
    })
    .catch((err) => console.error("❌ Error de conexión", err));
