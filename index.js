import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`O servidor foi aberto na porta ${port}`);
});
