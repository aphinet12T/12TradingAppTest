<template>
  <LayoutMain>
    <template v-slot:header>
      <div class="flex items-center justify-between pb-32">
        <div class="flex justify-end ml-2">
          <Icon class="icon" height="50" width="50" icon="mdi:marketplace-outline" />
          <div class=" text-4xl mt-1 ml-1">รายการขาย</div>
        </div>
        <div class="flex justify-end mr-2">
          <SearchBar />
        </div>
      </div>
      <DatePicker />
    </template>
    <template v-slot:body>
      <div class="absolute top-48 left-5">
      </div>
    </template>
  </LayoutMain>
  <ButtonNav />
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { computed, onMounted } from 'vue'
import { useRouteStore } from '../../stores'
import LayoutMain from '../LayoutMain.vue'
import ButtonNav from '../../components/tablet/ButtonNav.vue'
// import SearchBar from '../../components/SearchBar.vue'
// import DatePicker from '../../components/DatePicker.vue'
import ButtonTab from '../../components/tablet/ButtonTab.vue'
import ButtonAdd from '../../components/tablet/ButtonCircle.vue'
import Table from '../../components/Table.vue'


const store = useRouteStore();
const routeMain = computed(() => {
  return store.routeMain;
});

const dataRoute = computed(() => {
  return store.routeMain.map(item => ({
    ...item,
    status: item.status.number,
  }));
});

const tableColumns = computed(() => {
  return [
    { id: 'day', title: 'วันที่' },
    { id: 'route', title: 'เส้นทาง' },
    { id: 'status', title: 'สถานะ' },
  ];
});

onMounted(() => {
  store.getRouteMain();
});



</script>
