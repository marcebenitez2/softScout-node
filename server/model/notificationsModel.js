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
    console.log(data);
    console.log("------------------------------");
    console.log(error);
    console.log("-----------------------------");
    console.log(body);
  },
};

export default notificationsModel;
