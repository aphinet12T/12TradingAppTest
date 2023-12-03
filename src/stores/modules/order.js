import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore('orders', {
    state: () => ({
      productList: [],
    }),
    getter: {
        getProduct: (state) => state.productList,
    },
    actions: {
      async getSaleProduct() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/saleProduct/getProductAll",
            // {
            //   "area":"MBE1"
            // }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          this.productList = result;
          console.log("product", this.productList);
        } catch (error) {
          console.error(error);
        }
      },
    },
  });