import { Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    document.title = "Cafecito | Administracion";
    listarProductos()
      .then((respuestaProductos) => {
        if (respuestaProductos) {
          setProductos(respuestaProductos);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operación mas tarde",
          "error"
        );
      });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ItemProducto key={producto.id} producto={producto}></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
