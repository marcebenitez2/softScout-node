import { supabase } from "../db/supabase.js";

const notificationsModel = {
  getAll: async (req, res) => {
    const { data } = await supabase.from("notifications").select("*");
    return data;
  },

  createOne: async (body) => {
    const { data, error } = await supabase
      .from("notifications")
      .insert([
        {
          name: body.nombre,
          tel: String(body.telefono),
          mail: body.correo,
          message: body.mensaje,
          active: true,
        },
      ])
      .select("*");
  },

  updateView: async (id) => {
    const { data, error } = await supabase
      .from("notifications")
      .update({ active: false })
      .eq("id", id)
      .select("*");
  },
};

export default notificationsModel;
