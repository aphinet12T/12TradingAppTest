<template>
    <div class="text-center">

        <button type="button" @click="toggleBottomDrawer"
            class="text-white bg-red-500 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center">
            <Icon class="icon" height="40" width="40" icon="bi:bag-x" />
            <span class="">ไม่ขาย</span>
        </button>
    </div>

    <div v-if="showDrawer"
        class="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white transform-none"
        :aria-labelledby="drawerId" :id="drawerId" tabindex="-1">
        <div class="flex flex-col">
            <div>
                <button @click="closeDrawer" type="button" :data-drawer-hide="drawerId" :aria-controls="drawerId"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
            </div>
            <div class="text-4xl text-center">
                ระบุสาเหตุที่ร้านค้าไม่ซื้อ
            </div>
            <div class="mt-5 text-2xl">
                รหัสร้านค้า {{ storeID }}
            </div>
            <div class="text-2xl">
                ชื่อร้านค้า {{ storeName }}
            </div>
            <div class="mt-5">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="w-full text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
                    type="button">กดเพื่อเลือก
                    <Icon class="icon w-2.5 h-2.5 ms-3" icon="ep:arrow-down-bold" />
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-5">
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500" placeholder="ระบุสาเหตุ"></textarea>
            </div>
            <div class="mt-5">
                <button type="button" class="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2">บันทึก</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { initDropdowns } from 'flowbite';

export default {
    props: {
        storeID: String,
        storeName: String,
    },
    components: {
        Icon,
    },
    setup() {
        const showDrawer = ref(false);
        const drawerId = 'drawer-bottom-example';
        const drawerLabelId = 'drawer-bottom-label';

        const toggleBottomDrawer = () => {
            showDrawer.value = !showDrawer.value;
        };

        const closeDrawer = () => {
            showDrawer.value = false;
        };

        onMounted(() => {
            initDropdowns();
        })

        return {
            showDrawer,
            drawerId,
            drawerLabelId,
            toggleBottomDrawer,
            closeDrawer,
        };
    },
};
</script>
  