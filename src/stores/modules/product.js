import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('products', {
    state: () => ({
        productOption: {
            group: [],
            brand: [],
            size: [],
            flavour: [],
          },
    }),
    getter: {

    },
    actions: {
        async getDataOpion() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_API_BASE_URL + '/cms/saleProduct/getDataOption'
                );
                const result = response.data;
                this.productOption.group = result.group
                this.productOption.brand = result.brand
                this.productOption.size = result.size
                this.productOption.flavour = result.flavour
                console.log('option', this.productOption);
            } catch (error) {
                console.error(error)
            }
        },
    },
  });
  