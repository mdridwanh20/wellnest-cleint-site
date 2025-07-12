import { useQuery } from "@tanstack/react-query";

const fetchFromLocalStorage = async () => {
  return new Promise((resolve) => {
    const storeData = localStorage.getItem("cartItems");
    resolve(storeData ? JSON.parse(storeData) : null);
  });
};

export default function useCart() {
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: fetchFromLocalStorage,
    staleTime: Infinity,
  });
}

