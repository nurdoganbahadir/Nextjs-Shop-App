const { default: axios } = require("axios");

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_apiKey}/`,
  });
  return { axiosPublic };
};

export default useAxios;
