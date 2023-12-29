import { supabase } from "../db/supabase";

const userModel = {
  login: async (email, password) => {

    const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    })
  },
};


export default userModel;