import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { getProductSuccess } from "@/features/productSlice";

const useProductRequests = () => {
  const { axiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const { data } = await axiosPublic.get();
      dispatch(getProductSuccess(data.products));
    } catch (error) {
      console.log(error);
    }
  };

  return { getProduct };
};

export default useProductRequests;
