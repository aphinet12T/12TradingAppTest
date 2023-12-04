<template>
    <LayoutSub>
        <template v-slot>
            <div class="flex flex-col h-full">
                <div class="flex flex-row items-center">
                    <div class="mt-2">
                        <ButtonBack />
                    </div>
                    <div class="mt-2 ml-2 flex items-center">
                        <Icon icon="uil:cart" width="40" />
                        <span class="ml-2 text-3xl">ตะกร้าสินค้า</span>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <div class="ml-12 text-xl">
                        รหัส : {{ storeId }}
                    </div>
                    <div class="ml-12 text-xl">
                        ชื่อ : {{ storeName }}
                    </div>
                </div>
                <div class="flex flex-col items-center mt-5">
                    <div>
                        รายการสินค้าที่เลือก
                    </div>
                    <Table :columns="tableColumns" :data="orderCartList" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'">
                        <template v-slot:button="{ rowData }">
                            <button type="button"
                                class="text-white bg-red-500 w-6 h-6 font-medium rounded-md text-md inline-flex flex-col items-center justify-center"
                                @click="handleClick(rowData.id,rowData.unitId)">
                                <Icon class="icon w-4 h-4" icon="ph:x-bold" />
                            </button>
                        </template>
                    </Table>
                </div>
                <div class="relative rounded-t-xl overflow-auto p-4">
                    <div class="flex flex-nowrap gap-4 font-mono text-white text-2xl rounded-lg">
                        <button class="p-4 w-full rounded-lg flex items-center justify-center bg-blue-800 shadow-lg">
                           เลือกสินค้าเพิ่ม
                        </button>
                        <button class="p-4 w-full rounded-lg flex items-center justify-center bg-green-500 shadow-lg">
                           สร้างรายการ
                        </button>
                    </div>
                </div>
                <div class="flex-grow z-40">
                    <div class="bg-white h-full rounded-md shadow ">
                        <div class="flex flex-row justify-between">
                            <div class="text-2xl ml-7">
                                จำนวน
                            </div>
                               <div class="text-2xl mr-7">
                                {{ orderCart.totalQuantity }}
                            </div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-2xl ml-7">
                                มูลค่ารวม
                            </div>
                               <div class="text-2xl mr-7">
                                {{ orderCart.totalAmount }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </LayoutSub>
</template>

<script>
import { computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useOrderStore } from '../../stores'
import LayoutSub from '../LayoutSub.vue'
import ButtonBack from '../../components/IconBack.vue'
import Table from '../../components/Table.vue'

export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        Table,
    },
    setup() {

        const storeId = localStorage.getItem('routeStoreId')
        const storeName = localStorage.getItem('routeStoreName')

        const store = useOrderStore();
        const orderCart = computed(() => {
            return store.orderCart;
        });
        const orderCartList = computed(() => {
            return store.orderCartList;
        });
        onMounted(() => {
            store.getOrderCart();
            console.log('5555555',orderCartList);
        });

        const tableColumns = computed(() => {
            return [
                { id: 'name', title: 'ชื่อสินค้า' },
                { id: 'qty', title: 'จำนวน' },
                { id: 'summaryPrice', title: 'รวม' },
                { id: '', title: '*' },
            ];
        });

        const handleClick = (id,unitId) => {
            console.log(`item: ${id}`);
            console.log(`unit: ${unitId}`);
            // router.push('/cms/order/product')
            store.deleteItemCart(id,unitId);
        };

        const productId = localStorage.getItem('orderProductId')

        return {
            storeId,
            storeName,
            productId,
            orderCart,
            orderCartList,
            tableColumns,
            handleClick
        }
    }
}
</script>
