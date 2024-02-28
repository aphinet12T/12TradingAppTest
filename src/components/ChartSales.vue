<template>
    <div class="relative">
        <div class="bg-white w-card px-2 sha shadow-slate-300 shadow-md sm:rounded-lg overflow-auto h-[350px]">
            <div class="grid grid-cols-2">
                <dl class="flex items-center">
                    <dt class="text-gray-500 text-md font-normal me-1">รายงานยอดขาย</dt>
                </dl>
                <dl class="flex items-center justify-end">
                    <dt class="text-gray-500 text-md font-normal me-1" @click="reportDetail">รายละเอียด</dt>
                </dl>
            </div>
            <VueApexCharts type="bar" height="350" :options="chartOptions" :series="chartSeries" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import VueApexCharts from "vue3-apexcharts";
import { useReportStore } from '../stores';

const store = useReportStore();
const chartSales = computed(() => {
    return store.chartSale;
});

const chartOptions = ref({});
const chartSeries = ref([]);

const updateChartData = () => {
    chartOptions.value = {
        chart: {
            type: 'bar',
            background: '#ffffff',
            toolbar: { 
                show: false,
            },
        },
        xaxis: {
            categories: chartSales.value.month,
        },
    };

    chartSeries.value = [
        {
            name: 'sale',
            data: chartSales.value.dataSale,
        },
        {
            name: 'cn',
            data: chartSales.value.dataCn,
        },
    ];
};
const reportDetail = () => {
    console.log('55555');
}
onMounted(async () => {
    await store.getChartMain()
    console.log('test', chartSales.value.dataSale)
    updateChartData()
});


</script>
