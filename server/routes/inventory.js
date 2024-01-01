import express from "express";
import inventoryController from "../controller/inventary.js";

const router = express.Router();

router.get("/", inventoryController.getAll);

export default router;
