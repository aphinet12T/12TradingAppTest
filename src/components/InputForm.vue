<template>
    <label for="input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{text}}</label>
    <input type="text" id="input" :v-model="model"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="size"
        required>
</template>

<script setup>
defineProps({
  text: String,
  size: String,
  model: String,
});
</script>
