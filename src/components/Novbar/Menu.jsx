import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="bg-red-300 text-white py-3">
      <div className="container mx-auto flex justify-between">
        <p className="text-2xl">LOGO</p>
        <div className="flex gap-3 items-center">
          <p>Home</p>
          <p>Categorias</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};
