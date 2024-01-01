import inventoryModel from "../model/inventoryModel.js";

const inventoryController = {
  getAll: async (req, res) => {
    const allInventory = await inventoryModel.getAll();
    res.status(200).json(allInventory);
  },
};


export default inventoryController;