import express from "express";
import calendaryController from "../controller/calendary.js";

const router = express.Router();

router.get("/", calendaryController.getCalendary);

router.post("/", calendaryController.addEvent);

router.put("/:id", calendaryController.updateEvent);


export default router;
