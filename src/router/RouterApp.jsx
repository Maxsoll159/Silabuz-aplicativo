import { Route, Routes } from "react-router-dom";
import { Principal } from "../pages/PagePrincipal/Principal";
import { Menu } from "../components/Novbar/Menu";
import { Producto } from "../pages/Products/Producto";
import { Login } from "../pages/Login/Login";

import { RouterDash } from "../pages/Dashboard/router/RouterDash";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { RouterPrivate } from "./RouterPrivate";
import { CrearProducto } from "../pages/Dashboard/pages/CrearProducto";

export const RouterApp = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/:id" element={<Producto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<RouterPrivate>
            <Dashboard />
        </RouterPrivate>} />
        <Route path="/dashboard/crearproducto" element={<RouterPrivate>
            <CrearProducto />
        </RouterPrivate>} />
      </Routes>
    </>
  );
};
