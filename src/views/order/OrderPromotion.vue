<template>
      <LayoutSub>
        <template v-slot>
            <div class="flex flex-col h-full">
                <div class="flex flex-row items-center">
                    <div class="mt-2">
                        <ButtonBack />
                    </div>
                    <div class="mt-2 ml-2 flex items-center">
                        <Icon icon="solar:sale-square-outline" width="40" />
                        <span class="ml-2 text-3xl">โปรโมชัน/ส่วนลด</span>
                    </div>
                </div>
                <div class="flex flex-col items-center mt-5">
                    <div>
                        ของแถม
                    </div>
                    <Table :columns="tableColumns" :data="dataCart" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-[350px]'">
                        <template v-slot:button="{ rowData }">
                            <button type="button"
                                class="text-white bg-red-500 w-6 h-6 font-medium rounded-md text-md inline-flex flex-col items-center justify-center"
                                @click="handleClick(rowData.id, rowData.unitId)">
                                <Icon class="icon w-4 h-4" icon="ph:x-bold" />
                            </button>
                        </template>
                    </Table>
                </div>
                <div class="flex flex-col items-center mt-5">
                    <div>
                        ของแถม
                    </div>
                    <Table :columns="tableColumns" :data="dataCart" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-[350px]'">
                        <template v-slot:button="{ rowData }">
                            <button type="button"
                                class="text-white bg-red-500 w-6 h-6 font-medium rounded-md text-md inline-flex flex-col items-center justify-center"
                                @click="handleClick(rowData.id, rowData.unitId)">
                                <Icon class="icon w-4 h-4" icon="ph:x-bold" />
                            </button>
                        </template>
                    </Table>
                </div>
                <div class="relative rounded-t-xl overflow-auto p-4">
                    <div class="flex flex-nowrap gap-4 font-mono text-white text-2xl rounded-lg">
                        <button class="p-4 w-full rounded-lg flex items-center justify-center bg-green-500 shadow-lg"
                        @click="handleCheckout"
                        >
                            ถัดไป
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </LayoutSub>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useOrderStore } from '../../stores'
import LayoutSub from '../LayoutSub.vue'
import ButtonBack from '../../components/IconBack.vue'
import Table from '../../components/Table.vue'
import Alert from '../../components/Alert.vue'

export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        Table,
        Alert,
    },
    setup() {
        const router = useRouter()
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
        });

        const dataCart = computed(() => {
            return store.orderCartList.map(item => ({
                ...item,
                qty: `${item.qty} ${item.unitTypeThai}`
            }));
        });

        const tableColumns = computed(() => {
            return [
                { id: 'name', title: 'ชื่อสินค้า' },
                { id: 'qty', title: 'จำนวน' },
                { id: 'summaryPrice', title: 'รวม' },
                { id: '', title: '*' },
            ];
        });

        const showAlert = ref(false)
        const alertTitle = 'Confirmation';
        const alertContent = 'Are you sure you want to delete this item?'

        const selectedId = ref(null);
        const selectedUnitId = ref(null);

        const handleClick = (id, unitId) => {
            console.log(`item: ${id}`);
            console.log(`unit: ${unitId}`);
            selectedId.value = id;
            selectedUnitId.value = unitId;
            showAlert.value = true;
            // console.log(showAlert.value);
            // store.deleteItemCart(id, unitId);
        };

        const deleteItem = () => {
            const id = selectedId.value;
            const unitId = selectedUnitId.value;

            store.deleteItemCart(id, unitId);
            store.getOrderCart();
            dismissAlert();
        };

        const dismissAlert = () => {
            showAlert.value = false;
            console.log(showAlert.value);
        };

        const handleCheckout = () => {
            router.push('/cms/order/checkout')
        };

        const productId = localStorage.getItem('orderProductId')

        return {
            storeId,
            storeName,
            productId,
            orderCart,
            orderCartList,
            tableColumns,
            handleClick,
            dataCart,
            showAlert,
            alertTitle,
            alertContent,
            deleteItem,
            handleClick,
            dismissAlert,
            handleCheckout,
        }
    }
}
</script>
