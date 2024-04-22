import { defineStore } from 'pinia';

export const useUtilityStore = defineStore('utility', {
  state: () => ({
    errorMessage: '',
    storeName: '',
    storeTax: '',
    storePhone: '',
    storeRoute: '',
    storeType: '',
    storeLine: '',
    storeNote: '',
    address: {
      storeAddress: '',
      selectedProvince: '',
      selectedDistrict: '',
      selectedSubdistrict: '',
      selectedZipcode: '',
    },
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
    updateStoreData(data) {
      Object.assign(this, data)
    },
    updateAddress(address) {
      this.address = address
      console.log('1234',address);
    },
  },
});
