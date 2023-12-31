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

  addBeneficiary: async (beneficiary) => {
    const { data, error } = await supabase
      .from("beneficiaries")
      .insert([
        {
          name: beneficiary.nombre,
          dni: beneficiary.dni,
          birth: beneficiary.nacimiento,
          direction: beneficiary.direccion,
          tel: beneficiary.telefono,
          mail: beneficiary.mail,
          branch: beneficiary.rama,
          personal_file: beneficiary.personal,
          medical_file: beneficiary.medical,
          cuota: beneficiary.cuota,
          active: beneficiary.activo,
        },
      ])
      .select("*");
  },

  updateBeneficiary: async (id, beneficiary) => {
    const { data, error } = await supabase
      .from("beneficiaries")
      .update({
        name: beneficiary.nombre,
        dni: beneficiary.dni,
        birth: beneficiary.nacimiento,
        direction: beneficiary.direccion,
        tel: beneficiary.telefono,
        mail: beneficiary.mail,
        branch: beneficiary.rama,
        personal_file: beneficiary.personal,
        medical_file: beneficiary.medical,
        cuota: beneficiary.cuota,
        active: beneficiary.activo,
      })
      .match({ id: id })
      .select("*");
  },
};

export default beneficiariesModel;
