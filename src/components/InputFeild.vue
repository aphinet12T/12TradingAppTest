<template>
  <div class="flex justify-between">
    <div>
      <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}
        <span v-if="isRequired">*</span>
      </label>
    </div>
  </div>

  <input :id="id" :type="type" :class="class" :maxlength="maxlength" :required="isRequired" :value="modelValue" @input="handleInput"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  label: String,
  id: String,
  type: String,
  class: String,
  maxlength: Number,
  isRequired: Boolean,
  modelValue: String,
});
const emit = defineEmits(['update:modelValue'])
const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};

</script>
