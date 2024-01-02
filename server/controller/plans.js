import plansModel from "../model/plans.js";


const plansController = {
    getPlans: async (req, res) => {
        const plans = await plansModel.getAll();
        res.status(200).json(plans);
    },

    deletePlan: async (req, res) => {
        const { id } = req.params;
        const { error } = await plansModel.deleteOne(id);
        if (error) {
            res.status(400).json({ error });
        } else {
            res.status(200).json({ message: "Plan deleted successfully" });
        }
    },
}

export default plansController;