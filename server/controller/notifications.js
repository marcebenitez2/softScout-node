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

  updateConfirmation: async (req, res) => {
    const id = req.params.id;
    const result = await notificationsModel.updateView(id);
    res.json(result);
  },
};

export default notificationsController;
