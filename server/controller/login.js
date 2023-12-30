import userModel from "../model/loginModel.js";

const loginController = {
    login: async (req, res,next)=>{
        const {email, password} = req.body;
        const result = await userModel.login(email, password);
        res.json(result);
    }
}

export default loginController;