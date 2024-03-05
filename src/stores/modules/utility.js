import { defineStore } from 'pinia';

export const useUtilityStore = defineStore('utility', {
  state: () => ({
    errorMessage: '',
  }),
  actions: {
    validateInput(value) {
      if (!value) {
        this.errorMessage = 'กรอกข้อมูล';
        return false;
      } else {
        this.errorMessage = '';
        return true;
      }
    },
  },
});
