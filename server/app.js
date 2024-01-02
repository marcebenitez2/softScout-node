import express from "express";
import cors from "cors";
import loginRouter from "./routes/login.js";
import notificationsRouter from "./routes/notifications.js";
import beneficiariesRouter from "./routes/beneficiaries.js";
import inventaryRouter from "./routes/inventory.js";
import calendaryRouter from "./routes/calendary.js";
import plansRouter from "./routes/plans.js";
import advicesRouter from "./routes/advices.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/login", loginRouter);

app.use("/notifications", notificationsRouter);

app.use("/beneficiaries", beneficiariesRouter);

app.use("/inventory", inventaryRouter);

app.use("/calendary", calendaryRouter);

app.use("/plans", plansRouter);

app.use("/advices", advicesRouter);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
