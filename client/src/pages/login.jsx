import React from "react";
import { GoAlert } from "react-icons/go";
import ChangeTheme from "../components/changeTheme";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../services/userContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { setNombreUsuario, setRolUsuario, setRamaUsuario } =
    useContext(UserContext);
  const [usuario, setUsuario] = useState("");
  const [contra, setContra] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.preventDefault();
    try {
      // const data = {
      //   usuario: usuario,
      //   contra: contra,
      // };

      // const response = await fetch("http://localhost/login.php", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) {
      //   throw new Error("Error al iniciar sesión");
      // }
      // const responseData = await response.json();


      // ---------------------------------------------

      let headersList = {
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "usuario":"marce",
         "contra":"123"
       });
       
       let response = await fetch("https://php-scout.000webhostapp.com/login.php", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       const responseData = await response.text();
       console.log(responseData);
       

      if (responseData.status === "success") {
        localStorage.setItem("nombreUsuario", responseData.username);
        localStorage.setItem("rolUsuario", responseData.rol);
        localStorage.setItem("ramaUsuario", responseData.branch);

        sessionStorage.setItem("nombreUsuario", responseData.username);
        sessionStorage.setItem("rolUsuario", responseData.rol);
        sessionStorage.setItem("ramaUsuario", responseData.branch);

        setNombreUsuario(responseData.username);
        setRolUsuario(responseData.rol);
        setRamaUsuario(responseData.branch);

        navigate("/menu");
      } else {
        toast.error("Datos incorrectos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center dark:bg-custon-black">
      <ChangeTheme />
      <form className="w-2/5 bg-custon-red rounded-2xl gap-4 flex flex-col items-center py-9 px-28 justify-between 2xln:px-20 xln:px-14 lgn:px-7 mdn:w-3/4 smn:w-5/6 smn:h-3/5">
        <h1 className="text-5xl font-bold text-white">Login</h1>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col w-full">
            <label className="text-white text-xl font-semibold">
              Nombre de usuario:
            </label>
            <input
              className="h-10 dark:bg-custon-black dark:text-white px-4 font-semibold"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full font-semibold">
            <label className="text-white text-xl">Contraseña:</label>
            <input
              type="password"
              className="h-10 dark:bg-custon-black dark:text-white px-4 font-semibold"
              onChange={(e) => setContra(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-1/2 h-12 bg-white text-xl font-semibold text-black dark:bg-custon-black dark:text-white"
          onClick={(e) => iniciarSesion(e)}
        >
          Iniciar sesion
        </button>
        <div className="flex items-center">
          <GoAlert fill="white" size={40} />
          <span className="text-2xl text-white font-semibold smn:text-lg ">
            Unicamente si sos parte del grupo
          </span>
        </div>
      </form>
      <ToastContainer />
    </main>
  );
}

export default Login;
