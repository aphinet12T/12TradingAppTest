import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('orders', {
  state: () => ({
    productId: '',
    productList: [],
    productDetail: [],
    productUnit: [],
    orderCart: [],
    orderCartList: [],
    orderCheckout: [],
    orderCheckoutList: [],
    productUnitDetail: {
      id: '',
      unitId: '',
      qty: 1,
    },
    productData: {
      area: '',
      storeId: '',
      list: {
        id: '',
        name: '',
        pricePerUnitSale: 0.0,
        qty: 1,
        unitId: '',
      },
    },
    cartCheckout: {
      area: '',
      storeId: '',
      saleCode: '',
    },
    addOrder: {
      area: '',
      storeId: '',
      idRoute: '',
      latitude: '',
      longitude: '',
    },
  }),
  getter: {
    getProduct: (state) => state.productList,
    getProductDetail: (state) => state.productDetail,
    getProductUnitDetail: (state) => state.productUnitDetail,
  },
  actions: {
    resetProduct() {
      (this.productUnitDetail.unitId = ''), (this.productUnitDetail.qty = 1);
    },
    setProduct(id) {
      localStorage.setItem('productId', id);
      this.productId = id;
      this.productUnitDetail.id = id;
    },
    async updateProductData(data) {
      this.productUnitDetail = data;
      // console.log('update',this.productUnitDetail);
      await this.getSaleProductDetailUnit();
    },
    async addProductData(data) {
      this.productData = data;
      // console.log('add',this.productData);
      await this.addProductToCart();
    },
    async addOrderData(data) {
      this.addOrder = data;
      console.log('add', this.addOrder);
      await this.addNewOrder();
    },
    async getSaleProduct() {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + '/cms/saleProduct/getProductAll'
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
    async getSaleProductDetailUnit() {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const localProductId = localStorage.getItem('productId');
        if (!localProductId) return;
        this.productUnitDetail.id = localProductId;
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL +
            '/cms/saleProduct/getProductDetailUnit',
          this.productUnitDetail

          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        );
        const result = response.data;
        const resultList = response.data.unitList;
        this.productDetail = result;
        this.productUnit = resultList;
        console.log('productDetail', this.productDetail);
      } catch (error) {
        console.error(error);
      }
    },
    async addProductToCart() {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL +
            '/cms/saleProduct/addProductToCart',
          this.productData

          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        );
        const result = response.data;
        console.log('addTocart', result);
      } catch (error) {
        console.error(error);
      }
    },
    async addNewOrder() {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + '/cms/order/newOrder',
          this.addOrder

          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        );
        const result = response.data;
        console.log('createOrder', result);
      } catch (error) {
        console.error(error);
      }
    },
    async getOrderCart() {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const area = JSON.parse(localStorage.getItem('area'));
        const storeId = localStorage.getItem('routeStoreId');
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + '/cms/saleProduct/getCartToShow',
          {
            area: area,
            storeId: storeId,
          }
          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        );
        const result = response.data;
        const resultList = response.data.list;
        this.orderCart = result;
        this.orderCartList = resultList;
        console.log('orderCart', this.orderCart);
      } catch (error) {
        console.error(error);
      }
    },
    async getOrderCheckout() {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + '/cms/saleProduct/getPreOrder',
          this.cartCheckout
          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        );
        const result = response.data;
        const resultList = response.data.list;
        this.orderCheckout = result;
        this.orderCheckoutList = resultList;
        console.log('orderCheckout', this.orderCheckout);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItemCart(id, unitId) {
      try {
        //   const token = JSON.parse(localStorage.getItem('token'));
        const area = JSON.parse(localStorage.getItem('area'));
        const storeId = localStorage.getItem('routeStoreId');
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL + '/cms/saleProduct/deleteItemCart',
          {
            area: area,
            storeId: storeId,
            idProduct: id,
            unitId: unitId,
          }
          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        );
        const result = response.data;
        this.orderCart = result;
        console.log('delete', this.orderCart);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
