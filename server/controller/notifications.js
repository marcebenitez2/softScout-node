import notificationsModel from "../model/notificationsModel.js"


const notificationsController = {
    getNotificactions: async (req, res) => {
        const result = await notificationsModel.getAll()
        res.json(result)
    }
}


export default notificationsController;