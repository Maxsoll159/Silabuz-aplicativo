import { Route, Routes } from "react-router-dom";
import { Principal } from "../pages/PagePrincipal/Principal";
import { Menu } from "../components/Novbar/Menu";
import { Producto } from "../pages/Products/Producto";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";

export const RouterApp = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/:id" element={<Producto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
