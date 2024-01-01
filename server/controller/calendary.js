import calendaryModel from "../model/calendaryModel.js";

const calendaryController = {
  getCalendary: async (req, res) => {
    const calendary = await calendaryModel.getCalendary();
    res.status(200).json(calendary);
  },
};

export default calendaryController;
