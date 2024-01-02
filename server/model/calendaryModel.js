import { supabase } from "../db/supabase.js";

// estaria la consulta necesaria "SELECT c.*, p.title AS plan_title, p.url AS plan_url FROM calendary c LEFT JOIN plans p ON c.id = p.event;"

const calendaryModel = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("calendary")
      .select(`* , plans:id(*)`);
    if (error) {
      return { error };
    } else {
      return data;
    }
  },

  addEvent: async (datos) => {
    console.log(datos);
    const { data, error } = await supabase
      .from("calendary")
      .insert([
        {
          title: datos.nombre,
          date: datos.fecha,
          starttime: datos.inicio,
          endtime: datos.fin,
          location: datos.lugar,
          description: datos.descripcion,
          type: datos.tipo,
          branch: datos.rama,
          enddate: datos.fechaFin,
        },
      ])
      .select("*");
    if (error) {
      return { error };
    } else {
      return data;
    }
  },

  updateOne: async (id, datos) => {
    const { data, error } = await supabase
      .from("calendary")
      .update({
        title: datos.nombre,
        date: datos.fecha,
        starttime: datos.inicio,
        endtime: datos.fin,
        location: datos.lugar,
        description: datos.descripcion,
        type: datos.tipo,
        branch: datos.rama,
        enddate: datos.fechaFin,
      })
      .eq("id", id)
      .select("*");
  },
};

export default calendaryModel;
