<template>
    <div v-if="showAlert" :id="alertId" class="p-4 mb-4 fixed top-0 left-0 right-0 z-50 w-full h-44 overflow-x-hidden overflow-y-auto rounded-lg" :class="color" role="alert">
        <div class="flex items-center">
            <h3 class="text-3xl font-medium">{{ title }}</h3>
        </div>
        <div class="mt-2 mb-4 text-xl">
            {{ content }}
        </div>
        <div class="flex">
            <button type="button"
                class="text-white bg-green-500 font-medium rounded-lg text-lg px-7 py-3 me-2 text-center inline-flex items-center"
                @click="confirm">
                ยืนยัน
            </button>
            <button type="button"
                class="text-white bg-red-500 font-medium rounded-lg text-lg px-7 py-3 text-center"
                @click="dismiss" aria-label="Close">
                ยกเลิก
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
        color: {
            type: String,
        },
    },
    setup(props, { emit }) {

        const showAlert = ref(true)

        const product = props.product

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
            product
        };
    },
};
</script>
