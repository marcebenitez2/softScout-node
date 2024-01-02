import calendaryModel from "../model/calendaryModel.js";

const calendaryController = {
  getCalendary: async (req, res) => {
    const calendary = await calendaryModel.getAll();
    res.status(200).json(calendary);
  },

  addEvent: async (req,res)=>{
    const datos = req.body;
    // console.log(datos);
    const result = await calendaryModel.addEvent(datos);
    res.status(200).json(result);
  }
};

export default calendaryController;
