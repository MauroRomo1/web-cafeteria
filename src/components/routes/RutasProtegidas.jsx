import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador />}></Route>
      <Route exact path="/crear" element={<CrearProducto />}></Route>
      <Route exact path="/editar" element={<EditarProducto />}></Route>
    </Routes>
  );
};

export default RutasProtegidas;
