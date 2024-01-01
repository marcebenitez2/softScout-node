import express from "express";
import notificationsController from "../controller/notifications.js";

const router = express.Router();

router.get("/", notificationsController.getNotificactions);

router.post("/", notificationsController.createNotifications);

router.put('/:id', notificationsController.updateConfirmation)

export default router;
