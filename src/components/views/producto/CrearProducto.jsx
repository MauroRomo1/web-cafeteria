import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { crearProducto } from "../../helpers/queries";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Cafecito | Crear productos";
  }, []);

  const onSubmit = (producto) => {
    crearProducto(producto)
      .then((resp) => {
        if (resp.status === 201) {
          Swal.fire(
            "Producto guardado",
            "Su producto se guardo correctamente!",
            "success"
          );
          reset();
        }
      })
      .catch((error) => {
        Swal.fire(
          "Hubo un error",
          "Error al intentar cargar producto",
          "error"
        );
        console.log(error);
      });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio.",
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{2,50}$/,
                message:
                  "El nombre del producto debe de tener min de 2 caracteres un maximo de 50 y sin ningun caracter numerico.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio del producto es obligatorio.",
              min: {
                value: 500,
                message: "El precio minimo es de $500.",
              },
              max: {
                value: 20000,
                message: "El precio maximo es de $20.000.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion del producto..."
            {...register("descripcion", {
              required: "La descripcion del producto es obligatoria.",
              pattern: {
                value: /^[^\s].*[^\s]$/,
                message:
                  "La descripcion no debe contener espacios en blanco al principio o al final.",
              },
              minLength: {
                value: 6,
                message: "La descripcion debe de tener minimo 6 letras.",
              },
              maxLength: {
                value: 150,
                message: "La descripcion debe de tener maximo 150 letras.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen del producto es obligatoria.",
              pattern: {
                value: /^(https?|ftp):\/\/\S+\.(png|jpe?g|gif|bmp|svg)$/,
                message:
                  "La URL de la imagen debe de terminar en PNG, JPG o JPEG, GIF, BMP o SVG por ejemplo: 'http://example.com/picture.jpg'",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria del producto es olbigatoria.",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
