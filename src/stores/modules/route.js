import { defineStore } from "pinia";
import axios from "axios";

export const useRouteStore = defineStore("routes", {
    state: () => ({
      routeMain: [],
      routeDetail: null,
    }),
    getter: {
        getRouteMain: (state) => state.routeMain,
        getRouteDetail: (state) => state.routeDetail,
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
      async getRouteDetail() {
        try {
        //   const token = JSON.parse(localStorage.getItem("token"));
        const routeid = localStorage.getItem('routeId')
          const response = await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              "/cms/route/getRoute/getRouteDetail",
            {
              "id":routeid
            }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
          const result = response.data;
          this.routeDetail = result;
          console.log("detail", this.routeDetail);
        } catch (error) {
          console.error(error);
        }
      },
    },
  });