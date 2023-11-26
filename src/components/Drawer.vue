<template>
    <div>
        <button @click="showDrawer"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button">
            Show bottom drawer
        </button>

        <Drawer :show="isDrawerVisible" @close="hideDrawer">
            <!-- Drawer content -->
            <h5 class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                <!-- Icon -->
                <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                Bottom drawer
            </h5>
            <button @click="hideDrawer" type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <!-- Drawer content -->
            <!-- ... -->
        </Drawer>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
// import initDrawers from 'flowbite'
export default {
    setup() {
        // onMounted(() => {
        //     initDrawers();
        // })
        const isDrawerVisible = ref(false);

        const showDrawer = () => {
            isDrawerVisible.value = true;
        };
        const hideDrawer = () => {
            isDrawerVisible.value = false;
        };
        return {
            isDrawerVisible,
            showDrawer,
            hideDrawer,
        };
    },
};
</script>
  