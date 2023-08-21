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

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(uriProducto);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const crearProducto = async (producto) => {
  try {
    const resp = await fetch(uriProducto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    const resp = await fetch(`${uriProducto}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (id, productoEditado) => {
  try {
    const resp = await fetch(`${uriProducto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};
