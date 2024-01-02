import advicesModel from "../model/advicesModel.js";

const advicesController = {
  getAdvices: async (req, res) => {
    const result = await advicesModel.getAll();
    if (result.error) {
      res.status(400).send(result.error);
    } else {
      res.status(200).send(result);
    }
  },

  createAdvice: async (req, res) => {
    const datos = req.body;
    const result = await advicesModel.createOne(datos);
    res.json(result);
  },

  updateAdvice: async (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    const result = await advicesModel.updateOne(id, datos);
    res.json(result);
  },
};

export default advicesController;
