// Importar módulo express
const express = require("express");

// Importar módulo fileupload
const fileupload = require("express-fileupload");

// Importar MySQL
const mysql = require("mysql2");

// Importar módulo express-handlebars
const { engine } = require("express-handlebars");

// App
const app = express();

// Habilitando o upload de arquivos
app.use(fileupload());

// Adicionar Bootstrap
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

// Adicionar a pasta CSS
app.use("/css", express.static("./css"));

// Configuração do express-handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Manipulação de dados via rotas
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

// Rota de Cadastro
app.post("/cadastrar", function (req, res) {
  // Pega todas as requisicoes/informacoes fornecidas no corpo da funcao
  console.log(req.body);
  console.log(req.files.imagem.name);

  req.files.imagem.mv(__dirname + "/images/" + req.files.imagem.name);
  // Fecha a resposta (não envia nada ao cliente, apenas finaliza)
  // res.send() or res.json();
  res.end();
});
// Servidor
app.listen(8080);
