import { supabase } from "../db/supabase.js";

const userModel = {
  login: async (email, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      return { error };
    } else {
      console.log(user);
      return { user };
    }
  },
};

export default userModel;
