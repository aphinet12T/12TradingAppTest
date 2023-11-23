<template>
  <div class="flex justify-between">
    <div>
      <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}
        <span v-if="isRequired">*</span>
      </label>
    </div>
    <span v-if="isRequired && !modelValue.trim()" class="text-red-500">{{ validationError }}</span>
  </div>

  <input :type="type" :id="id" :class="class" :required="isRequired" :value="modelValue" @input="handleInput"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  id: String,
  label: String,
  class: String,
  type: String,
  isRequired: Boolean,
  modelValue: String,
});
const emit = defineEmits(['update:modelValue'])
const validationError = ref('');
const handleInput = (event) => {
  const inputValue = event.target.value;
  if (props.isRequired && !inputValue.trim()) {
    validationError.value = 'กรุณากรอกข้อมูล';
  } else {
    validationError.value = '';
  }
  emit('update:modelValue', inputValue);
};

</script>
