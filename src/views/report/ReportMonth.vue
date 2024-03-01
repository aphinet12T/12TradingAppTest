<template>
  <Table :columns="tableColumns" :data="dataSale" :thClass="'px-8 py-3'" :tdClass="'px-5 py-2'" :hTable="'h-[650px]'">
  </Table>
</template>
    
<script>
import { Icon } from '@iconify/vue';
import { computed, onMounted } from 'vue';
import Table from '../../components/Table.vue';
import { useReportStore } from '../../stores';

export default {
  components: {
    Icon,
    Table,
  },
  setup() {
    const store = useReportStore()
    const dataMonthSale = computed(() => {
      return store.monthSale
    })

    const tableColumns = computed(() => {
      return [
        { id: 'date', title: 'วันที่' },
        { id: 'totalPrice', title: 'จำนวน' },
        { id: '', title: '*' },
      ]
    })

    const dataSale = computed(() => {
      return store.monthSale.map(item => ({
        ...item,
        date: `${item.day}/${item.month}/${item.year}`
      }))
    })

    onMounted(async () => {
      await store.getMonthSale()
      console.log('12345', store.monthSale);
    });

    return {
      tableColumns,
      dataMonthSale,
      dataSale,
    }
  },
};
</script>
    