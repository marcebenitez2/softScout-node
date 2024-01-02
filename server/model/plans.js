import { supabase } from "../db/supabase.js";

const plansModel = {
  getAll: async () => {
    const { data, error } = await supabase.from("plans").select("*");
    if (error) {
      return { error };
    } else {
      return data;
    }
  },

  deleteOne: async (id) => {
    const { error } = await supabase.from("plans").delete().match({ id });
    if (error) {
      return { error };
    } else {
      return {};
    }
  },
};

export default plansModel;
