import { URLAPI } from "./Url";

export const postLogin = async (usuario) => {
    console.log(usuario)
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
