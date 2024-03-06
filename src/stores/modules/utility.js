import { defineStore } from 'pinia';

export const useUtilityStore = defineStore('utility', {
  state: () => ({
    errorMessage: '',
  }),
  actions: {
    validateInput(value) {
      const isValid = !!value; 

      this.errorMessage = isValid ? '' : 'กรุณากรอกข้อมูล'

      return isValid
    },
    getValidate() {
      return this.errorMessage
    },
    clearValidate() {
      this.errorMessage = ''
    },
  },
});
