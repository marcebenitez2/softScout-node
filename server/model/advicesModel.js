import { supabase } from "../db/supabase.js";

const advicesModel = {
  getAll: async () => {
    const { data, error } = await supabase.from("advices").select("*");
    if (error) {
      return { error };
    } else {
      return data;
    }
  },

  createOne: async (datos) => {
    const { data, error } = await supabase.from("advices").insert([
      {
        title: datos.titulo,
        date: datos.fecha,
        location: datos.lugar,
        branch: datos.rama,
        starttime: datos.horaInicio,
        urlfile: datos.archivo || null,
      },
    ]);
    if (error) {
      return { error };
    } else {
      return data;
    }
  },

  updateOne: async (id, datos) => {
    const { data, error } = await supabase
      .from("advices")
      .update({
        title: datos.titulo,
        date: datos.fecha,
        location: datos.lugar,
        branch: datos.rama,
        starttime: datos.horaInicio,
        urlfile: datos.archivo || null,
      })
      .match({ id: id });
    if (error) {
      return { error };
    } else {
      return data;
    }
  },

  deleteOne: async (id) => {
    const { data, error } = await supabase
      .from("advices")
      .delete()
      .match({ id: id });
    if (error) {
      return { error };
    } else {
      return data;
    }
  },
};

export default advicesModel;
