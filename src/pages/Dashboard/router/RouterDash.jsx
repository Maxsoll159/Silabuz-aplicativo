import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { CrearProducto } from "../pages/CrearProducto";

export const RouterDash = () => {
  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="/dashboard/xd" element={<CrearProducto />} />
  </Routes>;
};
