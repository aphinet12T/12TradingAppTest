<template>
    <LayoutSub>
        <template v-slot>
            <div class="flex flex-col">
                <div class="flex flex-row items-center">
                    <div class="mt-2">
                        <ButtonBack />
                    </div>
                    <div class="mt-2 ml-2 flex items-center">
                        <Icon icon="tdesign:store" width="40" />
                        <span class="ml-2">การเข้าเยี่ยม {{ routeDay }}</span>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <div class="ml-12">
                        รหัส : {{ routeStore.storeId }}
                    </div>
                    <div class="ml-12">
                        ชื่อ : {{ routeStore.name }}
                    </div>
                    <div class="ml-12">
                        ที่อยู่ : {{ routeStore.address }}
                    </div>
                </div>
                <div class="left-16">
                    <Table :columns="tableColumns" :data="routeStoreList" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'">
                    </Table>
                </div>
                <div class="flex flex-row justify-between">
                <div>
                    <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                        <span class="sr-only">Icon description</span>
                    </button>
                </div>
            </div>
            </div>
        </template>
    </LayoutSub>
</template>
    
<script>
import { Icon } from '@iconify/vue';
import { computed, onMounted } from 'vue';
import { useRouteStore } from '../../stores';
import LayoutSub from '../LayoutSub.vue';
import ButtonBack from '../../components/IconBack.vue';
import Table from '../../components/Table.vue';

export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        Table
    },

    setup() {
        const store = useRouteStore();
        const routeStore = computed(() => {
            return store.routeStore;
        });
        const routeStoreList = computed(() => {
            return store.routeStoreList;
        });

        const tableColumns = computed(() => {
            return [
                { id: 'number', title: 'ลำดับ' },
                { id: 'date', title: 'วันที่' },
                { id: 'orderId', title: 'รายการ' },
            ];
        });

        const routeDay = localStorage.getItem('routeDay')

        onMounted(() => {
            store.getRouteStore();
        });

        return {
            routeStore,
            routeStoreList,
            tableColumns,
            routeDay
        }
    }
}
</script>
    