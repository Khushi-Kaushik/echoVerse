require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const calmHavenRoutes = require("./routes/CalmHaven.route");
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/calm-haven/", calmHavenRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
  connectDB();
});
