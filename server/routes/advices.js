import express from "express";
import advicesController from "../controller/advices.js";

const router = express.Router();

router.get("/", advicesController.getAdvices);

router.post("/", advicesController.createAdvice);

router.put("/:id", advicesController.updateAdvice);

router.delete("/:id", advicesController.deleteAdvice);

export default router;
