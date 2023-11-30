<template>
    <div class="text-center">
        <button type="button" data-drawer-target="drawer-bottom-picture" data-drawer-show="drawer-bottom-picture"
            data-drawer-placement="bottom" aria-controls="drawer-bottom-picture"
            class="text-white bg-blue-700 font-medium rounded-lg text-md px-5 py-3 inline-flex flex-col items-center justify-center">
            <Icon class="icon" height="40" width="40" icon="bi:camera" />
            <span class="">ถ่ายรูป</span>
        </button>
    </div>

    <!-- drawer component -->
    <div id="drawer-bottom-picture"
        class="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform  bg-white transform-none"
        tabindex="-1" aria-labelledby="drawer-bottom-label">
        <div class="flex flex-col">
            <div>
                <button type="button" data-drawer-hide="drawer-bottom-picture" aria-controls="drawer-bottom-picture"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center">
                    <Icon class="w-5 h-5" icon="ph:x-bold" />
                </button>
            </div>
            <div class="text-4xl text-center">
                ถ่ายรูปภาพร้านค้า
            </div>
            <div class="mt-5">
                <div id="controls-carousel" class="relative w-full">
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div data-carousel-item="active">
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        </div>
                    </div>
                </div>

            </div>
            <div class="mt-5">
                <button type="button"
                    class="w-full focus:outline-none text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2">ถ่ายรูป</button>
                <button type="button"
                    class="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2">บันทึก</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue'
import { initDrawers, initCarousels } from 'flowbite'
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

        const toggleBottomDrawer = () => {
            showDrawer.value = !showDrawer.value;
        };

        const closeDrawer = () => {
            showDrawer.value = false;
        };

        onMounted(() => {
            initDrawers();
            initCarousels();
        })

        return {
            showDrawer,
            drawerId,
            toggleBottomDrawer,
            closeDrawer,
        }
    }

}
</script>

<style></style>