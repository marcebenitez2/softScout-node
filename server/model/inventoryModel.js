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

  createOne: async (datos) => {
    const { data, error } = await supabase
      .from("inventory")
      .insert([
        {
          name: datos.nombre,
          stock: datos.stock,
          available: datos.disponible,
          description: datos.descripcion,
          branch: datos.rama,
        },
      ])
      .select("*");
  },

  updateOne: async (id, datos) => {
    const { data, error } = await supabase
      .from("inventory")
      .update({
        name: datos.nombre,
        stock: datos.stock,
        available: datos.disponible,
        description: datos.descripcion,
        branch: datos.rama,
      })
      .eq("id", id)
      .select("*");
  },
};

export default inventoryModel;
