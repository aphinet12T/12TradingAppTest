import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
    state: () => ({
        productOption: {
            group: [],
            brand: [],
            size: [],
            flavour: [],
        },
        productList: [],
    }),
    getter: {
    },
    actions: {
        async getDataOpion(selectedGroup, selectedBrand, selectedSize, selectedFlavour) {
            try {
                //   const token = JSON.parse(localStorage.getItem('token'));
                const response = await (axios.post(
                    import.meta.env.VITE_API_BASE_URL + '/cms/saleProduct/getDataOption',
                    {
                        group: selectedGroup,
                        brand: selectedBrand,
                        size: selectedSize,
                        flavour: selectedFlavour
                    }
                    // {
                    //   headers: { Authorization: `Bearer ${token}` },
                    // }
                )).data
                // const result = response;
                this.productOption.group = response.group
                this.productOption.brand = response.brand
                this.productOption.size = response.size
                this.productOption.flavour = response.flavour
                console.log('option', this.productOption)
            } catch (error) {
                console.error(error)
            }
        },
        async getSaleProduct() {
            try {
                //   const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.post(
                    import.meta.env.VITE_API_BASE_URL +
                    '/cms/saleProduct/getProduct',
                    {
                        group: '',
                        brand: '',
                        size: '',
                        flavour: ''
                    }
                    // {
                    //   headers: { Authorization: `Bearer ${token}` },
                    // }
                );
                const result = response.data;
                this.productList = result;
                console.log('product', this.productList);
            } catch (error) {
                console.error(error);
            }
        },
    },
});
