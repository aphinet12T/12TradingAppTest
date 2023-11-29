<template>
    <div class="text-center">

        <button type="button" @click="toggleBottomDrawer"
        class="text-white bg-blue-700 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center">
        <Icon class="icon" height="40" width="40" icon="gis:map-route" />
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
            <div class="text-2xl text-center">
                ระบุสาเหตุที่ร้านค้าไม่ซื้อ
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

export default {
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
  