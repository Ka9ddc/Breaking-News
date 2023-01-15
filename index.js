const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const port = 8080;
app.listen(port, () => {
  console.log(`O servidor foi aberto na porta ${port}`);
});
