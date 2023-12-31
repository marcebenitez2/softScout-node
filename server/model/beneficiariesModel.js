import { supabase } from "../db/supabase.js";

const beneficiariesModel = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("beneficiaries")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      return { error };
    } else {
      return data;
    }
  },
};

export default beneficiariesModel;
