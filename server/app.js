import express from "express";
import cors from "cors";
import loginRouter from "./routes/login.js";
import notificationsRouter from "./routes/notifications.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: "*" }));
app.use(express.json());


app.use("/login", loginRouter);

app.use('/notifications',notificationsRouter)



app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
