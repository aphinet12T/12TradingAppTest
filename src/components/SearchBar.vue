<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <Icon icon="basil:search-outline" width="20" />
    </div>
    <!-- <button type="button"
      class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">ค้นหา</button> -->
    <input type="text" id="table-search" v-model="searchText" 
      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
      placeholder="พิมพ์ . . . " />
      <slot :filtered-data="filteredData"></slot> 
  </div>
</template>
    
<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  data: { type: Array, required: true },
});

const searchText = ref(''); 

const filteredData = computed(() => {
  const search = searchText.value.toLowerCase();
  if (!search) {
    return props.data; 
  }
  return props.data.filter(item =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(search)
  );
});
</script>
  