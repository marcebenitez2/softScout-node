import express from "express";
import beneficiariesController from "../controller/beneficiaries.js";

const router = express.Router();

router.get("/", beneficiariesController.getBeneficiaries);

router.post("/", beneficiariesController.addBeneficiary);

router.put("/:id", beneficiariesController.updateBeneficiary);

export default router;
