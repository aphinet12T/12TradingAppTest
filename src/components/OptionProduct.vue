<template>
    <div class="flex justify-center">
        <!-- <div class="bg-white h-64 w-card shadow-md rounded-lg mt-2 overflow-auto"> -->
            <div class=" flex flex-col items-center mt-3">
                <div class="flex flex-row">
                    <div class="mb-1">
                        <form class="max-w-sm mx-auto" >
                        <select 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5">
                            <option disabled value="">ประเภท</option>
                            <option v-for="group in dataProduct.group" :key="group" :value="group">
                                {{ group }}
                            </option>
                        </select>
                    </form>
                    </div>
                    <div class="mb-1 ml-5">
                        <form class="max-w-sm mx-auto" >
                        <select 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5">
                            <option disabled value="">แบรนด์</option>
                            <option v-for="brand in dataBrand" :key="brand" :value="brand">
                                {{ brand }}
                            </option>
                        </select>
                    </form>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                        <form class="max-w-sm mx-auto" >
                            <select 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5">
                                <option disabled value="">ขนาด</option>
                                <option v-for="size in dataProduct.size" :key="size" :value="size">
                                    {{ size }}
                                </option>
                            </select>
                        </form>
                    </div>
                    <div class="mb-1 ml-5">
                        <form class="max-w-sm mx-auto" >
                            <select 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5">
                                <option disabled value="">รสชาติ</option>
                                <option v-for="flavour in dataProduct.flavour" :key="flavour" :value="flavour">
                                    {{ flavour }}
                                </option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>
      
<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useProductStore } from '../stores';

const store = useProductStore();
const dataProduct = computed(() => {
    return store.productOption
})
const dataBrand = computed(() => {
    return store.productOption.brand
})
// const dataSize = computed(() => {
//     return store.productOption.size
// })
// const dataFlavour = computed(() => {
//     return store.productOption.flavour
// })

onMounted(() => {
    store.getDataOpion()
    console.log('66666', dataProduct);
});

</script>