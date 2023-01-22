import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";

const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

const port = 8080;
app.listen(port, () => {
  console.log(`O servidor foi aberto na porta ${port}`);
});
