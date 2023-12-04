<template>
    <div v-if="showAlert" :id="alertId" class="p-4 mb-4 fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
        <div class="flex items-center">
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-medium">{{ title }}</h3>
        </div>
        <div class="mt-2 mb-4 text-sm">
            {{ content }}
        </div>
        <div class="flex">
            <button type="button"
                class="text-white bg-blue-800 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                @click="confirm">
                comfirm
            </button>
            <button type="button"
                class="text-blue-800 bg-transparent border border-blue-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
                @click="dismiss" aria-label="Close">
                Dismiss
            </button>
        </div>
    </div>
</template>
  
<script>
import { reactive, ref } from 'vue';

export default {
    props: {
        alertId: {
            type: String,
            // required: true,
        },
        title: {
            type: String,
        },
        content: {
            type: String,
        },
    },
    setup(props, { emit }) {

        const showAlert = ref(true)

        function confirm() {
            emit('confirm');
        }

        function dismiss() {
            emit('dismiss');
            showAlert.value = false
        }

        return {
            showAlert,
            confirm,
            dismiss,
        };
    },
};
</script>
