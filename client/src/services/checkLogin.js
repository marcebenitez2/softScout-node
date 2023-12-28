export function checkLogin() {
  const nombreUsuarioLocal = localStorage.getItem("nombreUsuario");
  const rolUsuarioLocal = localStorage.getItem("rolUsuario");
  const ramaUsuarioLocal = localStorage.getItem("ramaUsuario");

  if (!!nombreUsuarioLocal && !!rolUsuarioLocal && !!ramaUsuarioLocal) {
    return true; // Datos de la sesión encontrados en localStorage
  }

  const nombreUsuarioSession = sessionStorage.getItem("nombreUsuario");
  const rolUsuarioSession = sessionStorage.getItem("rolUsuario");
  const ramaUsuarioSession = sessionStorage.getItem("ramaUsuario");

  // Verifica si los valores existen en sessionStorage para determinar si la sesión está iniciada
  return (
    !!nombreUsuarioSession && !!rolUsuarioSession && !!ramaUsuarioSession
  );
}
