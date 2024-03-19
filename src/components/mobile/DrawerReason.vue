<template>
    <div class="text-center">
        <button type="button" @click="toggleBottomDrawer"
            class="text-white bg-red-500 font-medium rounded-lg text-md px-6 py-3 inline-flex flex-col items-center justify-center">
            <Icon class="icon" height="40" width="40" icon="bi:bag-x" />
            <span class="">ไม่ขาย</span>
        </button>
    </div>
    <div v-show="showBackdrop" @click="closeDrawer" class="fixed inset-0 bg-black bg-opacity-50"></div>
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
                    <span class="sr-only">ปิดเมนู</span>
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
                <form class="max-w-sm mx-auto">
                    <select v-model="selectedReason" @change="emitData"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5">
                        <option value="" disabled selected>กรุณาเลือกสาเหตุ</option>
                        <option v-for="reason in dataReason" :key="reason.id" :value="reason.id">
                            {{ reason.name }}
                        </option>
                    </select>
                </form>
            </div>
            <div v-if="selectedReason === '0'" class="mt-5">
                <textarea v-model="reasonMessage" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="ระบุเหตุผล">
                </textarea>
            </div>
            <div class="mt-5">
                <button @click="saveReason" type="button"
                    class="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2">บันทึก</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, computed, onMounted, defineEmits } from 'vue';
import { Icon } from '@iconify/vue';
import { useOptionStore } from '../../stores';

export default {
    props: {
        storeID: String,
        storeName: String,
    },
    components: {
        Icon,
    },
    setup(props, { emit }) {
        const option = useOptionStore();
        const dataReason = computed(() => option.reason);

        const selectedReason = ref('');
        const showDrawer = ref(false);
        const showBackdrop = ref(false);
        const drawerId = 'drawer-bottom-example';

        const toggleBottomDrawer = () => {
            showDrawer.value = !showDrawer.value;
            if (showDrawer.value) {
                showBackdrop.value = true;
            }
        };

        const closeDrawer = () => {
            showDrawer.value = false;
            showBackdrop.value = false;
        };

        const emitData = () => {
            emit('update:data', { selectedReason: selectedReason.value });
        };

        const saveReason = () => {
            const reasonData = {
                selectedReason: selectedReason.value,
                reasonMessage: selectedReason.value === '0' ? reasonMessage : ''
            };
            console.log(reasonData);
        };

        let reasonMessage = ''
        
        onMounted(() => {
            option.getReason();
        });

        return {
            selectedReason,
            showDrawer,
            showBackdrop,
            drawerId,
            toggleBottomDrawer,
            closeDrawer,
            dataReason,
            saveReason,
            reasonMessage
        };
    },
};
</script>
