const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const conN = require("./Conn/conn");
conN();

const routeS = require("./rotas/routes");
app.use("/", routeS);

app.listen(3001, () => {
  console.log(" O Servidor está rodando na porta 3001");
});
