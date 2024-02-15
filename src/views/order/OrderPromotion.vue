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
                    <Table :columns="tableReward" :data="dataReward.listFree" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-[350px]'">
                        <!-- <template v-slot:body="{ row }">
                            <div v-for="(product, index) in row.listProduct" :key="index">
                                {{ product.productName }}
                            </div>
                        </template> -->
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
                        ส่วนลด
                    </div>
                    <Table :columns="tableFree" :data="dataDiscount" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'"
                        :hTable="'h-[350px]'">
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
                            @click="handleCheckout">
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
import { useOrderStore, usePromotionStore } from '../../stores'
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
        const reward = usePromotionStore();
        const orderCart = computed(() => {
            return store.orderCart;
        });
        const orderCartList = computed(() => {
            return store.orderCartList;
        });
        const listFree = computed(() => {
            return reward.freeList;
        });
        const listDiscount = computed(() => {
            return reward.discountList;
        });
        onMounted(() => {
            store.getOrderCart();
        });
        onMounted(() => {
            reward.getPromotionReward();
        });

        const dataReward = computed(() => {
            return {
                listFree: reward.freeList.map(item => ({
                    proId: item.proId,
                    summaryQty: item.summaryQty,
                    listProduct: item.listProduct.map(product => ({
                        productId: product.productId,
                        productName: product.productName,
                        qty: `${product.qty} ${product.unitQty}`,
                    })),
                })),
            }
        });

        const dataDiscount = computed(() => {
            return store.orderCartList.map(item => ({
                ...item,
                qty: `${item.qty} ${item.unitTypeThai}`
            }));
        });

        const tableReward = computed(() => {
            return [
                { id: 'proId', title: 'โปร' },
                { id: 'productName', title: 'สินค้า' },
                { id: 'qty', title: 'จำนวน' },
                { id: '', title: '*' },
            ];
        });

        const tableFree = computed(() => {
            return [
                { id: 'proId', title: 'ชื่อสินค้า' },
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
            tableReward,
            tableFree,
            handleClick,
            showAlert,
            alertTitle,
            alertContent,
            handleClick,
            dismissAlert,
            handleCheckout,
            dataReward,
            dataDiscount,
            listDiscount,
            listFree,
        }
    }
}
</script>
