import { supabase } from "../db/supabase.js";

const calendaryModel = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("calendary")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      return { error };
    } else {
      return data;
    }
  },
};

export default calendaryModel;
