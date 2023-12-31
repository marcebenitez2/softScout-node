import beneficiariesModel from "../model/beneficiariesModel.js";

const beneficiariesController = {
    getBeneficiaries: async (req, res, next)=>{
        const result = await beneficiariesModel.getAll();
        res.json(result);
    }
}

export default beneficiariesController;