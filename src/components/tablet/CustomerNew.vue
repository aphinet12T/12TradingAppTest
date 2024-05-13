<template>
    <Table :columns="tableColumns" :data="filteredData" :thClass="'px-8 py-3'" :tdClass="'px-5 py-2'" :hTable="'h-[550px]'"></Table>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import Table from '../../components/Table.vue'
import { useStoresStore, useUtilityStore } from '../../stores'

const store = useStoresStore()
const search = useUtilityStore()
const customerNew = computed(() => {
    return store.storeNew
})

const filteredData = computed(() => search.filteredData)
const tableColumns = computed(() => {
    return [
        { id: 'storeId', title: 'รหัสร้าน' },
        { id: 'name', title: 'ชื่อร้าน' },
        { id: 'route', title: 'เส้นทาง' },
        { id: 'approved', title: 'สถานะ' },
    ];
});

onMounted(() => {
    store.getCustomerNew()
    search.setSearchData(customerNew)
});

</script>
