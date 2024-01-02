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

  createOne: async (datos) => {
    const { error } = await supabase.from("plans").insert([
      {
        title: datos.titulo,
        branch: datos.rama,
        event: datos.evento,
        url: datos.archivo,
      },
    ]);
    if (error) {
      return { error };
    } else {
      return {};
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
