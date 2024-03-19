<template>
    <div v-if="show" :id="alertId" :class="alertClasses" role="alert">
        <div class="flex items-center">
            <h3 class="text-3xl font-medium">{{ title }}</h3>
        </div>
        <div class="mt-2 mb-4 text-xl">
            {{ content }}
        </div>
        <div class="flex">
            <button type="button"
                class="text-white bg-green-500 font-medium rounded-lg text-lg px-7 py-3 me-2 text-center inline-flex items-center"
                @click="onConfirm">
                {{ confirmText }}
            </button>
            <button type="button"
                class="text-white bg-red-500 font-medium rounded-lg text-lg px-7 py-3 text-center"
                @click="onDismiss" aria-label="Close">
                {{ dismissText }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    props: {
        alertId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: '',
        },
        confirmText: {
            type: String,
            default: 'Confirm',
        },
        dismissText: {
            type: String,
            default: 'Cancel',
        },
        show: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { emit }) {
        const onConfirm = () => {
            emit('confirm');
        };

        const onDismiss = () => {
            emit('dismiss');
        };

        const alertClasses = computed(() => {
            return [
                'p-4 mb-4 fixed top-0 left-0 right-0 z-50 w-full h-44 overflow-x-hidden overflow-y-auto rounded-lg',
                props.color,
            ];
        });

        return {
            onConfirm,
            onDismiss,
            alertClasses,
        };
    },
};
</script>
