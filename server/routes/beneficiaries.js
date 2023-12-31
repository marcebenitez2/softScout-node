import express from 'express';
import beneficiariesController from '../controller/beneficiaries.js';


const router = express.Router();

router.get('/',beneficiariesController.getBeneficiaries)

export default router;