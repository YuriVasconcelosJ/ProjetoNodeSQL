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
const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yuri170104",
  database: "projeto",
});

// Teste Conexão
conexao.connect(function (erro) {
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
  // Obter os dados que serão utilizados para o cadastro de produtos
  //Nome do produto sendo armazenado na variável
  let nome = req.body.nome;
  // Valor do produto sendo armazenado na variável
  let valor = req.body.valor;
  // Imagem do produto sendo armazenado na variável
  let imagem = req.files.imagem.name;

  // SQL
  let sql = `INSERT INTO produtos (nome, valor, image) VALUES ('${nome}', ${valor}, '${imagem}')`;

  // Executar comando SQL
  conexao.query(sql, function (erro, retorno) {
    // Caso ocorra algum erro
    if (erro) throw erro;

    // Caso ocorra o cadastro
    req.files.imagem.mv(__dirname + "/images/" + req.files.imagem.name);
    console.log(retorno);
  });

  // Retornar para a rota principal
  res.redirect("/");

  // Pega todas as requisicoes/informacoes fornecidas no corpo da funcao
  // console.log(req.body);
  // console.log(req.files.imagem.name);

  // // Fecha a resposta (não envia nada ao cliente, apenas finaliza)
  // // res.send() or res.json();
  // res.end();
});
// Servidor
app.listen(8080);
