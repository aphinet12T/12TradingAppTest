<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="bg-white h-card p-2">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" :class="thClass" v-for="col in columns" :key="col.id">
              {{ col.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
            class="border-b dark:bg-gray-900 dark:border-gray-700" @click="handleClick(item)">
            <td v-for="col in columns" :key="col.id" :class="tdClass">
              {{ item[col.id] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
    
<script setup>
const props = defineProps({
  columns: Array,
  data: Array,
  thClass: String,
  tdClass: String
});

const emit = defineEmits(['row-click']);
const handleClick = (item) => {
  emit('row-click', item);
};

</script>
  