const uriUsuario = import.meta.env.VITE_API_USUARIO;
const uriProducto = import.meta.env.VITE_API_PRODUCTO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(uriUsuario);
    const listaUsuarios = await respuesta.json();

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

const listarProductos = async () => {
  try {
    const respuesta = await fetch(uriProducto);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
    return null;
  }
};
