<template>
  <button type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center inline-flex items-center me-2">
    <Icon :icon="icon" width="30" />
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue';
defineProps({
  icon: String,
});

</script>