<template>
  <LayoutMain>
    <template v-slot:header>
      <div class="flex items-center justify-between pb-32">
        <div class="flex justify-end ml-2">
          <Icon class="icon" height="40" width="40" icon="gis:map-route" />
          <div class=" text-4xl mt-1">เส้นทาง</div>
        </div>
        <div class="flex justify-end mr-2">
          <SearchBar />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="absolute top-48 left-5">
        <Table :columns="tableColumns" :data="dataRoute" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'">
        </Table>
      </div>
    </template>
  </LayoutMain>
  <ButtonNav />
</template>
  
<script>
import { Icon } from '@iconify/vue';
import { 
  computed, onMounted } from 'vue';
import { useRouteStore } from '../../stores';
import LayoutMain from '../LayoutMain.vue';
import ButtonNav from '../../components/ButtonNav.vue';
import SearchBar from '../../components/SearchBar.vue';
import ButtonTab from '../../components/ButtonTab.vue';
import ButtonAdd from '../../components/ButtonCircle.vue';
import Table from '../../components/Table.vue';

export default {
  components: {
    Icon,
    LayoutMain,
    ButtonNav,
    SearchBar,
    ButtonTab,
    ButtonAdd,
    Table,
  },
  setup() {

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
        { id: 'status', title: 'สถานะ'},
      ];
    });

    onMounted(() => {
      store.getRouteMain();
    });

    return {
      tableColumns,
      routeMain,
      dataRoute,
    }

  }
};
</script>
  