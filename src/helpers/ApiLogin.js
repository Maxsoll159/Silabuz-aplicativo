import { URLAPI } from "./Url";

export const postLogin = async (usuario) => {
  try {
    const fechProducts = await fetch(`${URLAPI}/auth/login`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario),
    });
    const data = await fechProducts.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getAuth = async (token) => {
    try {
      const fechProducts = await fetch(`${URLAPI}/auth/profile`, {
        method: "GET",
        headers:{
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await fechProducts.json();
      return data;
    } catch (error) {
      return error;
    }
  };
