<template>
    <LayoutSub>
        <template v-slot>
            <div class="flex flex-col h-full">
                <Alert v-if="showAlert" :title="'สร้างรายการขาย'" :content="'ยืนยันการสร้างรายการขาย'" @confirm="handleSave" @dismiss="dismissAlert" 
                :color="'text-gray-600 border border-green-300 bg-green-100'"
                />
                <div class="flex flex-row items-center">
                    <div class="mt-2">
                        <ButtonBack />
                    </div>
                    <div class="mt-2 ml-2 flex items-center">
                        <span class="ml-2 text-3xl">ยืนยันการสั่งซื้อ</span>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <div class="ml-12 text-xl">
                        พนักงาน : {{ checkout.saleMan }}
                    </div>
                    <div class="ml-12 text-xl">
                        ร้านค้า : {{ checkout.storeName }}
                    </div>
                    <div class="ml-12 text-xl">
                        ที่อยู่ : {{ checkout.address }}
                    </div>
                    <div class="ml-12 text-xl">
                        เบอร์โทรศัพท์ : {{ checkout.tel }}
                    </div>
                    <div class="ml-12 text-xl">
                        เลขที่ผู้เสียภาษี : {{ checkout.taxID }}
                    </div>
                    <div class="ml-12 text-xl">
                        ที่อยู่จัดส่ง : {{ checkout.address }}
                    </div>
                </div>
                <div class="flex flex-col items-center mt-5">
                    <Table :columns="tableColumns" :data="checkoutList" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-[440px]'">
                    </Table>
                </div>
                <div class="flex-grow z-40">
                    <div class="bg-white h-full rounded-md shadow ">
                        <div class="flex flex-row justify-between">
                            <div class="text-xl ml-7">
                                ยอดรวม
                            </div>
                            <div class="text-xl mr-7">
                                {{ checkout.summaryAmount }}
                            </div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-xl ml-7">
                                ส่วนลดท้ายบิล
                            </div>
                            <div class="text-xl mr-7">
                                {{ checkout.discount }}
                            </div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-xl ml-7">
                                ราคาไม่รวมภาษี(Vat)
                            </div>
                            <div class="text-xl mr-7">
                                {{ checkout.totalAmountNoVat }}
                            </div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-xl ml-7">
                                ภาษี(Vat)
                            </div>
                            <div class="text-xl mr-7">
                                {{ checkout.vat }}
                            </div>
                        </div>
                        <div class="flex flex-row justify-between">
                            <div class="text-xl ml-7">
                                มูลค่ารวม
                            </div>
                            <div class="text-xl mr-7">
                                {{ checkout.totalAmount }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative rounded-t-xl overflow-auto p-4">
                    <div class="flex flex-nowrap gap-4 font-mono text-white text-2xl rounded-lg">
                        <button class="p-4 w-full rounded-lg flex items-center justify-center bg-green-500 shadow-lg"
                        @click="handleClick"
                        >
                            บันทึกรายการ
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
import { useOrderStore, useGeolocation } from '../../stores'
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

        const router = useRouter();
        const storeId = localStorage.getItem('routeStoreId')
        const storeName = localStorage.getItem('routeStoreName')

        const store = useOrderStore();
        const checkout = computed(() => store.orderCheckout)
        const checkoutList = computed(() => store.orderCheckoutList)
        const { latitude, longitude, error } = useGeolocation()

        onMounted(() => {
            store.getOrderCheckout();
        });

        const tableColumns = computed(() => {
            return [
                { id: 'name', title: 'สินค้า' },
                { id: 'qtyText', title: 'จำนวน' },
                { id: 'pricePerQty', title: 'ราคา' },
                { id: 'discount', title: 'ส่วนลด' },
                { id: 'totalAmount', title: 'รวม' },
            ];
        });

        const showAlert = ref(false)

        const handleClick = () => {
            showAlert.value = true;
        };

        const dismissAlert = () => {
            showAlert.value = false;
            console.log(showAlert.value);
        };

        const handleSave = async () => {
                try {
                    var lat = latitude.value.toString()
                    var long = longitude.value.toString()
                    await store.addOrderData({
                        area: 'MBE1',
                        storeId: localStorage.getItem('routeStoreId'),
                        idRoute: localStorage.getItem('routeId'),
                        latitude: lat,
                        longitude: long,
                    });
                    showAlert.value = false;
                    await router.push('/cms/route/store');
                } catch (error) {
                    console.error(error);
                }
    
        }

        return {
            storeId,
            storeName,
            checkout,
            checkoutList,
            tableColumns,
            handleClick,
            showAlert,
            handleClick,
            dismissAlert,
            handleSave,
            latitude, 
            longitude, 
            error
        }
    }
}
</script>
