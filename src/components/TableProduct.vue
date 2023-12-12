<template>
    <div class="mx-4">
        <Dropdown v-for="option in optionData" :key="option.id" :dropdownId="option.id" btClass="w-60"
            :dropdownItems="option" :data="option.option" />
    </div>
    <div class="flex justify-center mt-5">
        <Table :columns="tableColumns" :data="products" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'"
            :hTable="'h-[600px]'">
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
import { useOrderStore, useProductStore } from '../stores'
import { Icon } from '@iconify/vue'
import Table from '../components/Table.vue'
import Dropdown from '../components/Dropdown.vue'
export default {
    components: {
        Icon,
        Table,
        Dropdown,
    },
    setup() {

        const option = useProductStore()
        const store = useOrderStore()
        const products = computed(() => {
            return store.productList
        });

        const tableColumns = computed(() => {
            return [
                { id: 'id', title: 'รหัสสินค้า' },
                { id: 'name', title: 'ชื่อสินค้า' },
                { id: '', title: '*' },
            ];
        });

        const handleClick = (id) => {
            store.setProduct(id)
            // console.log(`item: ${id}`)
        };

        // const optionData = computed(() => ({
        //     group: option.productOption.group,
        //     brand: option.productOption.brand,
        //     size: option.productOption.size,
        //     flavour: option.productOption.flavour,
        // }));

        const optionData = computed(() => {
            return [
                { id: 'group', buttonText: 'กลุ่ม' },
                { id: 'brand', buttonText: 'ยี่ห้อ' },
                { id: 'size', buttonText: 'ขนาด' },
                { id: 'flavour', buttonText: 'รสชาติ' },
            ];
        });

        onMounted(() => {
            store.getSaleProduct()
            option.getDataOpion(),
            console.log(option.option);
        });

        return {
            products,
            tableColumns,
            handleClick,
            optionData,
        }
    }
}
</script>
