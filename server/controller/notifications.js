import notificationsModel from "../model/notificationsModel.js";

const notificationsController = {
  getNotificactions: async (req, res) => {
    const result = await notificationsModel.getAll();
    res.json(result);
  },

  createNotifications: async (req, res) => {
    const body = req.body;
    const result = await notificationsModel.createOne(body);
    res.json(result);
  },
};

export default notificationsController;
