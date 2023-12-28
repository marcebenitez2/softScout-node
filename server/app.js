import express from "express";
import cors from "cors";
import loginRouter from "./routes/login.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/login", loginRouter);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
