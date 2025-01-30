// Importar módulo express
const express = require("express");

// Importar MySQL
const mysql = require("mysql2");

// Importar módulo express-handlebars
const { engine } = require("express-handlebars");

// App
const app = express();

// Adicionar Bootstrap
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

// Adicionar a pasta CSS
app.use("/css", express.static("./css"));

// Configuração do express-handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Configuração de conexão
const conexão = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yuri170104",
  database: "projeto",
});

// Teste Conexão
conexão.connect(function (erro) {
  if (erro) throw erro;
  console.log("Conexão efetuada com sucesso!");
});

// Rota Principal
app.get("/", function (req, res) {
  res.render("formulario");
  // resposta para escrever
  // res.write("Utilizando o Nodemon");
  // Fechamento da resposta
  // res.end();
});
// Servidor
app.listen(8080);
