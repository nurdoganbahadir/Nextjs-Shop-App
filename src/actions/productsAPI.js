"use server";
const BASE_URL = process.env.BASE_URL;

export const getAllProducts = async (page, limit, search) => {
  let url = `https://dummyjson.com/products/`;
  const params = new URLSearchParams();

  if (page) params.append("page", page);
  if (limit) params.append("limit", limit);
  if (search) params.append("q", search);

  if (params.toString()) url += `search?${params.toString()}`;

  try {
    const res = await fetch(url, {
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
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
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
