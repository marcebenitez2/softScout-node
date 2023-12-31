import beneficiariesModel from "../model/beneficiariesModel.js";

const beneficiariesController = {
  getBeneficiaries: async (req, res, next) => {
    const result = await beneficiariesModel.getAll();
    res.json(result);
  },

  addBeneficiary: async (req, res, next) => {
    console.log(req.body);
    const result = await beneficiariesModel.addBeneficiary(req.body);
    res.json(result);
  },

  updateBeneficiary: async (req, res, next) => {
    const id = req.params.id;
    const result = await beneficiariesModel.updateBeneficiary(id, req.body);
    res.json(result);
  },
};

export default beneficiariesController;
