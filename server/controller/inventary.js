import inventoryModel from "../model/inventoryModel.js";

const inventoryController = {
  getAll: async (req, res) => {
    const allInventory = await inventoryModel.getAll();
    res.status(200).json(allInventory);
  },

  createOne: async (req, res) => {
    const datos = req.body;
    const newInventory = await inventoryModel.createOne(datos);
    res.status(200).json(newInventory);
  },

  updateOne: async (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    const updatedInventory = await inventoryModel.updateOne(id, datos);
    res.status(200).json(updatedInventory);
  },
};

export default inventoryController;
