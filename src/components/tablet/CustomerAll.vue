<template>
    <Table :columns="tableColumns" :data="filteredData" :thClass="'px-8 py-3'" :tdClass="'px-9 py-2'" :hTable="'sm:h-[430px] md:h-[650px]'"></Table>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import Table from '../../components/Table.vue'
import { useStoresStore, useUtilityStore } from '../../stores'

const store = useStoresStore()
const search = useUtilityStore()
const customerAll = computed(() => {
    return store.storeAll
});

const filteredData = computed(() => search.filteredData)
const tableColumns = computed(() => {
    return [
        { id: 'storeId', title: 'รหัสร้าน' },
        { id: 'name', title: 'ชื่อร้าน' },
        { id: 'route', title: 'เส้นทาง' },
        { id: 'distric', title: 'ที่อยู่' },
    ];
});

onMounted(() => {
    store.getCustomerAll()
    search.setSearchData(customerAll)
});

</script>
