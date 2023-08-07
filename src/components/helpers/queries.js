export const login = async (usuario) => {
  try {
    const repuesta = await fetch("http://localhost:3004/usuarios");
    const listaUsuarios = await repuesta.json();

    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );

    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        console.log("Todo esta perfecto");
        return usuarioBuscado;
      } else {
        console.log("el password es erroneo");
        return null;
      }
    } else {
      console.log("El email es incorrecto");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
