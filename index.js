if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()};
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const conN = require("./Conn/conn");
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

conN(db_url,db_user,db_pass,db_data);

const routeS = require("./rotas/routes");
app.use("/", routeS);

app.listen(process.env.PORT || 3001, () => {
  console.log(" O Servidor está rodando process.env.PORT || 3001");
});
