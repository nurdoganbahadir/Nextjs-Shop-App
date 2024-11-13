"use server";
const BASE_URL = process.env.BASE_URL;

export const getAllProducts = async () => {
  try {
    const res = await fetch(BASE_URL, {
      ContentType: "aplication/json",
      method: "GET",
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(
        data.message || "Something went wrong, Please try again!"
      );
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      ContentType: "aplication/json",
      method: "GET",
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(
        data.message || "Something went wrong, Please try again!"
      );
    }
  } catch (error) {
    return { error: error.message };
  }
};
