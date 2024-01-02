import express from 'express'
import plansController from '../controller/plans.js'

const router = express.Router()


router.get('/', plansController.getPlans)

router.delete('/:id', plansController.deletePlan)

export default router