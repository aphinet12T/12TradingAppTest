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
                        <span class="ml-2 text-3xl">สั่งซื้อสินค้า</span>
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
                <div>
                    <OptionProduct @update:data="updateOption" />
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
                <div class="flex justify-end mt-3 mr-5">
                    <router-link to="/cms/order/cart">
                        <ButtonCart :icon="'bytesize:cart'" />
                    </router-link>
                </div>
            </div>
        </template>
    </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useOrderStore } from '../../stores'
import { useRouter } from 'vue-router'
import LayoutSub from '../LayoutSub.vue'
import ButtonBack from '../../components/IconBack.vue'
import OptionProduct from '../../components/OptionProduct.vue'
import Table from '../../components/Table.vue'
import ButtonCart from '../../components/ButtonCircle.vue'

export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        OptionProduct,
        Table,
        ButtonCart,
    },
    setup() {
        const store = useOrderStore();
        const products = computed(() => {
            return store.productList;
        })

        const storeId = localStorage.getItem('routeStoreId')
        const storeName = localStorage.getItem('routeStoreName')

        const tableColumns = computed(() => {
            return [
                { id: 'id', title: 'รหัสสินค้า' },
                { id: 'name', title: 'ชื่อสินค้า' },
                { id: '', title: '*' },
            ]
        })

        const vGpoup = ref('')
        const vBrand = ref('')
        const vSize = ref('')
        const vFlavour = ref('')

        const updateOption = (optionProduct) => {
            vGpoup.value = optionProduct.selectedGroup
            vBrand.value = optionProduct.selectedBrand
            vSize.value = optionProduct.selectedSize
            vFlavour.value = optionProduct.selectedFlavour

            console.log('group', vGpoup.value);
        }

        const router = useRouter();
        const handleClick = (id) => {
            store.setProduct(id);
            router.push('/cms/order/product')
            // console.log(`item: ${id}`);
        }

        onMounted(() => {
            store.getSaleProduct()
        })

        return {
            storeId,
            storeName,
            tableColumns,
            products,
            handleClick,
            updateOption,
        }
    }
}
</script>
