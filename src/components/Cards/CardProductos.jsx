import { Link } from "react-router-dom";

export const CardProductos = ({producto}) => {
  return (
    <div className="shadow-lg">
      <img src={producto.images[0]} alt="" />
      <div className="p-5">
        <p>{producto.title}</p>
        <p>S/. {producto.price}</p>
        <p>{producto.category.name}</p>
        <div className="flex justify-between items-center mt-3">
          <Link to={`/${producto.id}`} className="bg-blue-500 text-white font-bold p-3 rounded-md">Ver Datelles</Link>
          <button className="bg-green-500 text-white font-bold p-3 rounded-md">Carrito</button>
        </div>
      </div>
    </div>
  );
};
