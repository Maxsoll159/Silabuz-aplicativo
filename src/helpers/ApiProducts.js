import { URLAPI } from "./Url";

export const getProducts = async () => {
  try {
    const fechProducts = await fetch(`${URLAPI}/products`, {
      method: "GET",
    });
    const data = await fechProducts.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getProductsID = async (id) => {
  try {
    const fechProducts = await fetch(`${URLAPI}/products/${id}`, {
      method: "GET",
    });
    const data = await fechProducts.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const postProducto = async (producto) => {
  try {
    const fechProducts = await fetch(`${URLAPI}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    const data = await fechProducts.json();
    return data;
  } catch (error) {
    return error;
  }
};
