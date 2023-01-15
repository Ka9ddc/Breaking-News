const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.route");

app.use("/soma", userRoute);

const port = 8080;
app.listen(port, () => {
  console.log(`O servidor foi aberto na porta ${port}`);
});
