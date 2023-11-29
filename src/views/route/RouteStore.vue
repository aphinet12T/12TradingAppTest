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
                <div class="flex justify-center mt-5">
                    <Table :columns="tableColumns" :data="routeStoreList" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'">
                    </Table>
                </div>
                <div class="flex flex-row justify-center">
                    <div class="mx-10 mt-14">
                        <!-- <button type="button"
                            class="text-white bg-blue-700 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center">
                            <Icon class="icon" height="40" width="40" icon="gis:map-route" />
                            <span class="">ไม่ขาย</span>
                        </button> -->
                        <Drawer></Drawer>
                    </div>
                    <div class="mx-10 mt-14">
                        <button type="button"
                            class="text-white bg-blue-700 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center">
                            <Icon class="icon" height="40" width="40" icon="gis:map-route" />
                            <span class="">ไม่ขาย</span>
                        </button>
                    </div>
                    <div class="mx-10 mt-14">
                        <button type="button"
                            class="text-white bg-blue-700 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center">
                            <Icon class="icon" height="40" width="40" icon="gis:map-route" />
                            <span class="">ไม่ขาย</span>
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
import Drawer from '../../components/Drawer.vue';

export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        Table,
        Drawer,
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
            routeDay,
        }
    }
}
</script>
    