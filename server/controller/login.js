import userModel from "../model/loginModel";

const loginController = {
    login: async (req, res,next)=>{
        const {email, password} = req.body;
        const {user, error} = await userModel.login(email, password);
        if(error){
            return next(error);
        }
        res.json(user);
    }
}

export default loginController;