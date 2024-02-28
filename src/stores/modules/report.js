import { defineStore } from 'pinia';
import axios from 'axios';

export const useReportStore = defineStore('report', {
    state: () => ({
        chartSale: [],
    }),
    getter: {
    },
    actions: {
        async getChartMain() {
            try {
                //   const token = JSON.parse(localStorage.getItem('token'));
                //   const area = JSON.parse(localStorage.getItem('area'))
                const response = await axios.get(
                    import.meta.env.VITE_API_BASE_URL + '/cms/dashBoard/getMain',
                    {
                        //   area: area,
                    }
                    // {
                    //   headers: { Authorization: `Bearer ${token}` },
                    // }
                );
                const result = response.data
                this.chartSale = result
                console.log('mainChart', this.chartSale)
            } catch (error) {
                console.error(error);
            }
        },
    },
});
