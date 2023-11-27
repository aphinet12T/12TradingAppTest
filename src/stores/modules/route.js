import { defineStore } from "pinia";
import axios from "axios";

export const useRouteStore = defineStore("routes", {
    state: () => ({
      routeMain: [],
    }),
    getter: {
        getRouteMain: (state) => state.routeMain,
        getStatusNumbers: (state) => state.routeMain.map(item => item.status.number),
    },
    actions: {
      async getRouteMain() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/route/getRoute/getRouteMain",
            {
              "area":"MBE1"
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          this.routeMain = result;
          console.log("route", this.routeMain);
        } catch (error) {
          console.error(error);
        }
      },
    },
  });