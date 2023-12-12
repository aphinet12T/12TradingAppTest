<template>
    <div class="flex justify-center mt-5">
    <Table :columns="tableColumns" :data="products" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-[600px]'">
        <template v-slot:button="{ rowData }">
            <button type="button"
                class="text-white bg-green-500 w-6 h-6 font-medium rounded-md text-md inline-flex flex-col items-center justify-center"
                @click="handleClick(rowData.id)">
                <Icon class="icon w-4 h-4" icon="ph:plus-bold" />
            </button>
        </template>
    </Table>
</div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useOrderStore } from '../stores'
import { Icon } from '@iconify/vue'
import Table from '../components/Table.vue'
export default {
    components: {
        Icon,
        Table,
    },
    setup() {
        const store = useOrderStore();
        const products = computed(() => {
            return store.productList;
        });

        const tableColumns = computed(() => {
            return [
                { id: 'id', title: 'รหัสสินค้า' },
                { id: 'name', title: 'ชื่อสินค้า' },
                { id: '', title: '*' },
            ];
        });

        const handleClick = (id) => {
            store.setProduct(id);
            // router.push('/cms/order/product')
            console.log(`item: ${id}`);
        };

        onMounted(() => {
            store.getSaleProduct();
        });

        return {
            products,
            tableColumns,
            handleClick
        }
    }
}
</script>
