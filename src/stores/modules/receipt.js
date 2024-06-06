import { defineStore } from 'pinia';
import axios from 'axios';

export const useReceiptStore = defineStore('receipt', {
  state: () => ({
    items: [
      { name: 'สินค้า A', price: 100 },
      { name: 'สินค้า B', price: 200 },
    ],
    total: 0,
    date: new Date().toLocaleDateString('th-TH'),
  }),
  actions: {
    calculateTotal() {
      this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    },
    async printReceipt() {
      this.calculateTotal();
      try {
         await axios.post(
            import.meta.env.VITE_API_BASE_URL +
              '/cms/print/orderPrint',
              {
                items: this.items,
                total: this.total,
                date: this.date,
              }
            // {
            //   headers: { Authorization: `Bearer ${token}` },
            // }
          );
        alert('ใบเสร็จถูกพิมพ์แล้ว');
      } catch (error) {
        console.error('Error printing receipt:', error);
        alert('เกิดข้อผิดพลาดในการพิมพ์ใบเสร็จ');
      }
    },
  },
});
