import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApp } from "../../context/ContextApp";

export const Menu = () => {
  const { setUsuarioLogin ,usuarioLogin } = useContext(ContextApp);
  const navigate = useNavigate()
  const salir = () => {
    localStorage.removeItem("token")
    navigate("/login")
    setUsuarioLogin(null)
  };

  return (
    <nav className="bg-red-300 text-white py-3">
      <div className="container mx-auto flex justify-between">
        <p className="text-2xl">LOGO</p>
        <div className="flex gap-3 items-center">
          <p>Home</p>
          <p>Categorias</p>
          {usuarioLogin !== null ? (
            <div className="flex items-center gap-3 font-bold">
              <img
                src={usuarioLogin.avatar}
                alt=""
                width={40}
                className="rounded-full"
              />
              <p>{usuarioLogin.name}</p>
              <button
                onClick={salir}
                className="bg-red-500 text-white rounded-lg p-2"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
