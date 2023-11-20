<template>
    <Table :columns="tableColumns" :data="customerNew" :thClass="'px-7 py-3'" :tdClass="'px-8 py-2'"></Table>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import Table from './Table.vue';
import { useStoresStore } from '../stores';

const store = useStoresStore();
const customerNew = computed(() => {
    return store.storeNew;
});

const tableColumns = computed(() => {
    return [
        { id: 'idStore', title: 'รหัสร้าน' },
        { id: 'name', title: 'ชื่อร้าน' },
        { id: 'route', title: 'เส้นทาง' },
        { id: 'approved', title: 'สถานะ' },
    ];
});

onMounted(() => {
    store.getCustomerNew();
});

</script>
