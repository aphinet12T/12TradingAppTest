import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore('orders', {
    state: () => ({
      productList: [],
      productDetail: [],
      productUnit: [],
      orderCart: [],
      orderCartList: [],
    }),
    getter: {
        getProduct: (state) => state.productList,
        getProductDetail: (state) => state.productDetail,
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
      async getSaleProductDetail() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const productId = localStorage.getItem("orderProductId")
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/saleProduct/getProductDetail",
            {
              "id":productId
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          const resultList = response.data.unitList;
          this.productDetail = result;
          this.productUnit = resultList;
          console.log("productDetail", this.productUnit);
        } catch (error) {
          console.error(error);
        }
      },
      async getOrderCart() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const storeId = localStorage.getItem("routeStoreId")
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/saleProduct/getCartToShow",
            {
              "area":"MBE1",
              "storeId":storeId
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          const resultList = response.data.list;
          this.orderCart = result;
          this.orderCartList = resultList;
          console.log("orderCart", this.orderCart);
        } catch (error) {
          console.error(error);
        }
      },
      async deleteItemCart(id,unitId) {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const storeId = localStorage.getItem("routeStoreId")
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/saleProduct/deleteItemCart",
            {
              "area":"MBE1",
              "storeId":storeId,
              "idProduct":id,
              "unitId":unitId
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          this.orderCart = result;
          console.log("delete", this.orderCart);
        } catch (error) {
          console.error(error);
        }
      },
    },
  });