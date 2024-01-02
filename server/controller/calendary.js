import calendaryModel from "../model/calendaryModel.js";

const calendaryController = {
  getCalendary: async (req, res) => {
    const calendary = await calendaryModel.getAll();
    res.status(200).json(calendary);
  },

  addEvent: async (req, res) => {
    const datos = req.body;
    // console.log(datos);
    const result = await calendaryModel.addEvent(datos);
    res.status(200).json(result);
  },

  updateEvent: async (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    const result = await calendaryModel.updateOne(id, datos);
    res.status(200).json(result);
  },

  deleteEvent: async (req,res)=>{
    const id = req.params.id;
    const result = await calendaryModel.deleteOne(id);
    res.status(200).json(result);
  }
};

export default calendaryController;
