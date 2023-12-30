import express from "express";
import notificationsController from "../controller/notifications.js";

const router = express.Router();

router.get("/", notificationsController.getNotificactions);

router.post("/", notificationsController.createNotifications);

export default router;
