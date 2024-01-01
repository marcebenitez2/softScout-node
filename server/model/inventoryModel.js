import { supabase } from "../db/supabase.js";

const inventoryModel = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("inventory")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      return { error };
    } else {
      return data;
    }
  },
};

export default inventoryModel;
