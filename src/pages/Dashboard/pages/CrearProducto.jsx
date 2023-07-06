import { useState } from "react";
import { postProducto } from "../../../helpers/ApiProducts";

export const CrearProducto = () => {
  const [newProducto, setNewProducto] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: 1,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProducto({
      ...newProducto,
      [name]: name === "images" ? value.split(",") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProducto(newProducto).then(res=>console.log(res))
    console.log(newProducto)
  };

  return (
    <section>
      <article className="container mx-auto">
        <h1 className="font-bold text-3xl text-center">
          Soy la pagina crear producto
        </h1>
        <form action="" className="shadow-md w-1/2 p-5" onSubmit={handleSubmit}>
          <div>
            <label className="block" htmlFor="">
              Nombre Producto
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={newProducto.title}
              className="border-2 border-blue-300 p-2 rounded-md mt-2"
            />
          </div>
          <div>
            <label className="block" htmlFor="">
              Precio Producto
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="price"
              value={newProducto.price}
              className="border-2 border-blue-300 p-2 rounded-md mt-2"
            />
          </div>
          <div>
            <label className="block" htmlFor="">
              Descripcion Producto
            </label>
            <textarea
              onChange={handleChange}
              type="text"
              name="description"
              value={newProducto.description}
              className="border-2 border-blue-300 p-2 rounded-md mt-2"
            />
          </div>
          <div>
            <label className="block" htmlFor="">
              Imagenes Producto
            </label>
            <textarea
              onChange={handleChange}
              type="text"
              name="images"
              value={newProducto.images}
              className="border-2 border-blue-300 p-2 rounded-md mt-2"
            />
          </div>
          <button className="bg-green-500 text-white font-bold rounded-md p-3">
            Crear Producto
          </button>
        </form>
      </article>
    </section>
  );
};
