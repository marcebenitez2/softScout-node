import express from "express";
import inventoryController from "../controller/inventary.js";

const router = express.Router();

router.get("/", inventoryController.getAll);

router.post("/", inventoryController.createOne);

router.put("/:id", inventoryController.updateOne);

export default router;
