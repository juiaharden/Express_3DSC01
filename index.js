const express = require("express");
const app = express();

const PORT = 3303;
//CONFIGURANDO ROTA DE ESTÁTICOs
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});

app.get("/contato", function (req, res) {
  res.sendFile(__dirname + "/src/views/contato.html");
});
//ROTA UTILIZANO MIDDLEWRe (404)]
app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running...");
});
