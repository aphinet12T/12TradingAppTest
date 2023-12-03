import { defineStore } from "pinia";
import axios from "axios";

export const useStoresStore = defineStore("stores", {
    state: () => ({
      storeAll: [],
      storeNew: [],
    }),
    getter: {
      getCustomerAll: (state) => state.storeAll,
      getCustomerNew: (state) => state.storeNew,
    },
    actions: {
      async getCustomerAll() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/store/getStore",
            {
              "zone":"BE191"
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          this.storeAll = result;
          console.log("stores", this.storeAll);
        } catch (error) {
          console.error(error);
        }
      },
      async getCustomerNew() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/store/getStoreNew",
            {
              "zone":"BE191"
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          this.storeNew = result;
          console.log("storesNew", this.storeNew);
        } catch (error) {
          console.error(error);
        }
      },
    },
  });