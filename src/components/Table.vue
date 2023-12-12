<template>
  <div class="relative">
    <div class="bg-white w-card px-2 sha shadow-slate-300 shadow-md sm:rounded-lg overflow-auto" :class="hTable">
      <table class="w-full text-md text-left text-gray-500">
        <thead class="text-lg text-gray-700 uppercase bg-gray-50 sticky top-0">
          <tr>
            <th scope="col" :class="thClass" v-for="col in columns" :key="col.id">
              {{ col.title }}
            </th>
          </tr>
        </thead>
        <tbody v-if="data.length === 0">
          <tr>
            <td :colspan="columns.length" class="text-center py-4 text-gray-500">ไม่มีข้อมูล</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="(item, index) in data" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
            class="border-b" @click="handleClick(item)">
            <td v-for="col in columns" :key="col.id" :class="tdClass">
              <template v-if="col.id === ''">
                <slot name="button" :rowData="item" />
              </template>
              <template v-else>
                {{ item[col.id] }}
              </template>
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
  tdClass: String,
  hTable: String,
});

const emit = defineEmits(['row-click']);
const handleClick = (item) => {
  emit('row-click', item);
};

</script>
  