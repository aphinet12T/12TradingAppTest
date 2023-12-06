import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
    area: JSON.parse(localStorage.getItem("area")),
  }),
  getters: {
    isLoggedIn: (state) => state.user,
  },
  actions: {
    async login(userLogin, passwordLogin) {
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + 
          "/cms/authen/login",
          { userName: userLogin, passWord: passwordLogin },
        //   {
        //     headers: { "Content-Type": "application/json" },
        //   }
        );
        const user = response.data
        if (user) {
          this.user = user.data.fullName
          this.token = user.data.token
          this.area = user.data.area
          localStorage.setItem("name", JSON.stringify(this.user))
          localStorage.setItem("token", JSON.stringify(this.token))
          localStorage.setItem("area", JSON.stringify(this.area))
        } else {
          this.logout()
        }
        console.log("login", user.data)
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.area = null;
      localStorage.clear()
    },
  },
});
