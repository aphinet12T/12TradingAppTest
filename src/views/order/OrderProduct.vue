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
                        <span class="ml-2 text-3xl">รายละเอียดสินค้า</span>
                    </div>
                </div>
                <div class="flex flex-col items-center mt-5">
                    <div
                        class="flex flex-col items-center h-52 p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                        <img class="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="">
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <p class="mb-2 text-2xl">
                                รหัส : {{ productDetail.id }}
                            </p>
                            <p class="mb-2 text-2xl">
                                ชื่อ : {{ productDetail.name }}
                            </p>
                            <p class="mb-2 text-2xl">
                                ราคา :
                            </p>
                        </div>
                    </div>
                </div>
                <div class="relative rounded-t-xl overflow-auto p-8">
                    <div class="flex flex-nowrap gap-4 font-mono text-white text-2xl rounded-lg">
                        <button class="p-4 w-full rounded-lg flex items-center justify-center bg-green-500 shadow-lg"
                            v-for="item in productUnit" :key="item.id">
                            {{ item.nameThai }}
                        </button>
                    </div>
                </div>
                <div class="flex flex-grow justify-center z-40">
                    <div class="bg-white h-full w-card rounded-md shadow">
                        <div class="ml-2 mt-2 text-xl">
                            รายละเอียดสินค้า/โปรโมชัน
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex justify-start text-2xl ml-7 mt-3">
                        รวมราคา : 100000 บาท
                    </div>
                    <div class="flex justify-end mr-7 mt-2">
                        <InputCounter></InputCounter>
                    </div>
                </div>
                <div class="relative rounded-t-xl overflow-auto p-8">
                    <div class="flex flex-nowrap gap-4 font-mono text-white text-2xl leading-6 rounded-lg">
                        <button class="p-4 w-full rounded-lg flex items-center justify-center bg-green-500 shadow-lg">
                            บันทึก
                        </button>
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
import InputCounter from '../../components/InputCounter.vue'
export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        InputCounter,
    },
    setup() {

        const store = useOrderStore();
        const productDetail = computed(() => {
            return store.productDetail;
        });
        const productUnit = computed(() => {
            return store.productUnit;
        });
        onMounted(() => {
            store.getSaleProductDetail();
        });

        const productId = localStorage.getItem('orderProductId')

        return {
            productId,
            productDetail,
            productUnit,
        }
    }
}
</script>
