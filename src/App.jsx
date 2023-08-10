import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Administrador from "./components/views/Administrador";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import EncapsularRutas from "./components/routes/EncapsularRutas";
import RutasProtegidas from "./components/routes/RutasProtegidas";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};

  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
    <BrowserRouter>
      <Menu usuarioActivo={usuarioActivo} setUsuarioActivo={setUsuarioActivo} />
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioActivo={setUsuarioActivo} />}
        ></Route>
        <Route exact path="/registro" element={<Registro />}></Route>
        <Route exact path="/detalle" element={<DetalleProducto />}></Route>

        <Route
          path="/administrador/*"
          element={
            <EncapsularRutas>
              <RutasProtegidas />
            </EncapsularRutas>
          }
        ></Route>

        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
