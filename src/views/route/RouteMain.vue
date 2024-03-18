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
      <div class="flex justify-center">
        <Table :columns="tableColumns" :data="routeMain" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'" :hTable="'h-700'"
          @row-click="handleClick">
          <template v-slot:statusNumber="{ rowData, item }">
              <span v-if="item.status === '0'"
                class="bg-red-100 text-red-800 text-md font-medium px-2.5 py-0.5 rounded">
                {{ item.statusNumber }}
              </span>
              <span v-if="item.status === '1'"
                class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {{ item.statusNumber }}
              </span>
              <span v-if="item.status === '2'"
                class="bg-blue-100 text-blue-800 text-md font-medium px-2.5 py-0.5 rounded">
                {{ item.statusNumber }}
              </span>
            </template>
        </Table>
      </div>
    </template>
  </LayoutMain>
  <ButtonNav />
</template>

<script>
import { Icon } from '@iconify/vue';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
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

    // const dataRoute = computed(() => {
    //   return store.routeMain.map(item => ({
    //     ...item,
    //     status: item.status.number,
    //   }));
    // });

    const router = useRouter();
    const handleClick = (row) => {
      const routeId = row.id;
      const routeDay = row.day;
      const routeNo = row.route;
      localStorage.setItem('routeId', routeId);
      localStorage.setItem('routeDay', routeDay);
      localStorage.setItem('routeNo', routeNo);
      router.push('/cms/route/detail')
    };

    const tableColumns = computed(() => {
      return [
        { id: 'day', title: 'วันที่' },
        { id: 'route', title: 'เส้นทาง' },
        { id: 'statusNumber', title: 'สถานะ' },
      ];
    });

    onMounted(() => {
      store.getRouteMain();
    });

    return {
      tableColumns,
      routeMain,
      handleClick
    }

  }
};
</script>
