import { supabase } from "../db/supabase.js";

const notificationsModel = {
  getAll: async (req, res) => {
    const { data } = await supabase.from("notifications").select("*");
    return data;
  },
};

export default notificationsModel;
