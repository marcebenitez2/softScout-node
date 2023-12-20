export const updateBD = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data)
      
    });

    // Ver la respuesta en la consola
    console.log("Respuesta del servidor:", response);

  } catch (error) {
    console.log("Error en la solicitud:", error);
  }
};
