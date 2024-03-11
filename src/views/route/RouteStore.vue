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
                        <span class="ml-2 text-3xl">การเข้าเยี่ยม {{ routeDay }}</span>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <div class="ml-12 text-xl">
                        รหัส : {{ routeStore.storeId }}
                    </div>
                    <div class="ml-12 text-xl">
                        ชื่อ : {{ routeStore.name }}
                    </div>
                    <div class="ml-12 text-xl">
                        ที่อยู่ : {{ routeStore.address }}
                    </div>
                </div>
                <div class="flex justify-center mt-5">
                    <Table :columns="tableColumns" :data="routeStoreList" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-[650px]'">
                    </Table>
                </div>
                <div class="flex flex-row justify-center">
                    <div class="mx-10 mt-5">
                        <DrawerReason :storeID="routeStore.storeId" :storeName="routeStore.name" />
                    </div>
                    <div class="mx-10 mt-5">
                        <button type="button" @click="handleClick"
                            class="text-white bg-green-500 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center shadow-slate-300 shadow-md">
                            <Icon class="icon" height="40" width="40" icon="bi:bag-plus" />
                            <span class="">ขาย</span>
                        </button>
                    </div>
                    <div class="mx-10 mt-5">
                        <DrawerPicture :btClass="'px-5 py-3'">
                            <template v-slot:icon>
                                <Icon class="icon" :height="'40'" :width="'40'" :icon="'bi:camera'"/>
                            </template>
                        </DrawerPicture>
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
import { useRouter } from 'vue-router';
import LayoutSub from '../LayoutSub.vue';
import ButtonBack from '../../components/IconBack.vue';
import Table from '../../components/Table.vue';
import DrawerReason from '../../components/DrawerReason.vue';
import DrawerPicture from '../../components/DrawerPicture.vue';

export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        Table,
        DrawerReason,
        DrawerPicture,
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

        const router = useRouter();
        const handleClick = () => {
            router.push('/cms/order/add')
        }

        const routeDay = localStorage.getItem('routeDay')

        onMounted(() => {
            store.getRouteStore();
        });

        return {
            routeStore,
            routeStoreList,
            tableColumns,
            handleClick,
            routeDay,
        }
    }
}
</script>
    