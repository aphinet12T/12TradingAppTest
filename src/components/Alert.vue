<template>
    <div v-if="showAlert" :id="alertId" :class="alertClasses" role="alert">
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
                @click="viewMore">
                View more
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
            default: 'alert-additional-content-1',
        },
        title: {
            type: String,
            default: 'Info Alert',
        },
        content: {
            type: String,
            default: 'More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
        },
    },
    setup(props) {

        const showAlert = ref(true)
        const alertClasses = reactive({
            'p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50': true,
        });

        function viewMore() {
        }

        function dismiss() {
            showAlert.value = false
        }

        return {
            showAlert,
            alertClasses,
            viewMore,
            dismiss,
        };
    },
};
</script>
