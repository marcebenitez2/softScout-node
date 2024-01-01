import express from "express";
import calendaryController from "../controller/calendary.js";

const router = express.Router();

router.get("/", calendaryController.getCalendary);


export default router;
