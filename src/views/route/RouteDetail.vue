<template>
  <LayoutSub>
    <template v-slot>
      <div class="flex flex-row items-center">
        <div class="mt-2">
          <ButtonBack />
        </div>
        <div class="mt-2 ml-2 flex items-center">
          <Icon icon="tdesign:store" width="40" />
          <span class="ml-2">การเข้าเยี่ยม</span>
        </div>
      </div>
      <div class="flex flex-row justify-between">
        <div class="mt-4 ml-12">
          Day 07
        </div>
        <div class="mt-4 mr-12">
          Route
        </div>
      </div>
      <div class="absolute left-12">
        <Table :columns="tableColumns" :data="routeDetail" :thClass="'px-10 py-3'" :tdClass="'px-10 py-2'"
          @row-click="handleClick">
        </Table>
      </div>
    </template>
  </LayoutSub>
</template>
  
<script>
import { Icon } from '@iconify/vue';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRouteStore } from '../../stores';
import LayoutSub from '../LayoutSub.vue';
import ButtonBack from '../../components/IconBack.vue';
import Table from '../../components/Table.vue';

export default {
  components: {
    Icon,
    LayoutSub,
    ButtonBack,
    Table
  },

  setup() {
    const store = useRouteStore();
    const routeDetail = computed(() => {
      return store.routeDetail;
    });

    const router = useRouter();
    const handleClick = (row) => {
      const routeStore = row.id;
      localStorage.setItem('routeStoreId', routeStore);
      router.push('/cms/route/store')
    };

    const dataRouteDetail = computed(() => {
      return store.routeDetail.map(item => ({
        ...item,
        id: item.list.id,
        name: item.list.name,
        statusText: item.list.statusText,
      }))
    })

    const tableColumns = computed(() => {
      return [
        { id: 'id', title: 'รหัสร้านค้า' },
        { id: 'name', title: 'ชื่อร้านค้า' },
        { id: 'statusText', title: 'สถานะ' },
      ]
    })

    onMounted(() => {
      store.getRouteDetail();
    })

    return {
      routeDetail,
      dataRouteDetail,
      tableColumns,
      handleClick
    }
  }
}
</script>
  