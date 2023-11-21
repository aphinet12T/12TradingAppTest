<template>
    <LayoutSub>
        <template v-slot>
            <div class="flex flex-row items-center">
                <div class="mt-2">
                    <ButtonBack />
                </div>
                <div class="mt-2 ml-2 flex items-center">
                    <Icon icon="tdesign:store" width="40" />
                    <span class="ml-2">เพิ่มร้านค้า</span>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between mt-3">
                <div class="mt-2 ml-8 flex items-center">
                    <Icon icon="tdesign:store" width="20" />
                    <span class="ml-2">ข้อมูลร้านค้า</span>
                </div>
                <div class="mt-2 mr-8">
                    <p class=" text-gray-500">*ข้อมูลบังคับ</p>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="bg-white h-96 w-card shadow-md rounded-lg mt-2">
                    <div class=" flex flex-col items-center mt-5">
                        <div class="mb-1">
                            <label for="storeName"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อร้านค้า</label>
                            <input type="text" id="storeName" v-model="vStoreName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                            <div class="flex justify-end">
                                <label for="storeName"
                                    class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36
                                    ตัวอักษร</label>
                            </div>
                        </div>
                        <div class="mb-1">
                            <label for="storeTax"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่ผู้เสียภาษี</label>
                            <input type="text" id="storeTax"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                            <div class="flex justify-end">
                                <label for="storeTax" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน
                                    13 ตัวอักษร</label>
                            </div>
                        </div>
                        <div class=" flex flex-row">
                            <div class="mb-1 mt-">
                                <label for="storeTel"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">โทรศัพท์</label>
                                <input type="number" id="storeTel"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required>
                            </div>
                            <div class="mb-1 ml-5">
                                <label for="storeRoute"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เส้นทาง</label>
                                <input type="text" id="storeRoute"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required>
                            </div>
                        </div>
                        <div class="mb-1">
                            <label for="storeName"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทร้านค้า</label>
                            <input type="text" id="storeName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import LayoutSub from '../LayoutSub.vue';
import ButtonBack from '../../components/IconBack.vue';
export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
    },

    setup() {

        const vStoreName = ref('');
        // const areaInput = ref('');
        // const provinceInput = ref('');

        const sendData = () => {
            // store.setName(nameInput.value);
            // store.setArea(areaInput.value);
            // store.setProvince(provinceInput.value);

            store.sendDataToAPI();
        };

        return {
            vStoreName,
            sendData,
        };

    }
}
</script>
