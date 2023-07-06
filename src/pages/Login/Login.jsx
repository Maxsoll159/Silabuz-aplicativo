import { useContext, useState } from "react";
import { getAuth, postLogin } from "../../helpers/ApiLogin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../../context/ContextApp";

export const Login = () => {
  const { setUsuarioLogin } = useContext(ContextApp);

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(usuario).then((res) => {
      if (res.statusCode !== 401) {
        Swal.fire("Good job!", "Ingresaste al Sistema!", "success");
        localStorage.setItem("token", res.access_token);
        getAuth(res.access_token).then((res) => {
          if (res.statusCode !== 400) {
            setUsuarioLogin(res);
          }
        });
        navigate("/dashboard", { state: { logged: true } });
      } else {
        Swal.fire("Error Login", "Correo o Contraseña Incorrecto", "error");
      }
    });
  };
  return (
    <section>
      <article className="container mx-auto flex items-center justify-center">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="block">
              Correo:
            </label>
            <input
              value={usuario.email}
              onChange={handleChange}
              name="email"
              required
              type="email"
              className="border-2 border-blue-300 p-2 rounded-md mt-2"
              placeholder="ejemplo@hotmail.com"
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              Contraseña
            </label>
            <input
              value={usuario.password}
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="border-2 border-blue-300 p-2 rounded-md mt-2"
              placeholder="*************"
            />
          </div>
          <button className="bg-blue-500 text-white rounded-lg p-3 mt-3 w-full">
            Ingresar
          </button>
        </form>
      </article>
    </section>
  );
};
