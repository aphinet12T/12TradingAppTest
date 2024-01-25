import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    validateLogin: null,
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
    area: JSON.parse(localStorage.getItem("area")),
  }),
  getters: {
    isLoggedIn: (state) => state.user,
    getValidate: (state) => state.validateLogin,
  },
  actions: {
    async login(userLogin, passwordLogin) {
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + 
          "/cms/authen/login",
          { userName: userLogin, passWord: passwordLogin },
        );
        const result = response.data
        if (result) {
          this.user = result.data.fullName
          this.token = result.data.token
          this.area = result.data.area
          this.saleCode = result.data.saleCode
          this.salePayer = result.data.salePayer
          localStorage.setItem("name", JSON.stringify(this.user))
          localStorage.setItem("token", JSON.stringify(this.token))
          localStorage.setItem("area", this.area)
          localStorage.setItem("saleCode", this.saleCode)
          localStorage.setItem("salePayer", JSON.stringify(this.salePayer))
        } else {
          this.validateLogin = user.message 
          this.logout()
        }
        console.log("login", result.data)
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.area = null;
      this.saleCode = null;
      this.salePayer = null;
      localStorage.clear()
    },
  },
});
