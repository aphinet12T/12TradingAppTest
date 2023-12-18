<template>
  <LayoutMain>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <div class="flex justify-end ml-2">
          <Icon class="icon" height="60" width="60" icon="ic:baseline-store" />
          <div class=" text-4xl mt-2">ร้านค้า</div>
        </div>
        <div class="flex justify-end mr-2">
          <SearchBar />
        </div>
      </div>
      <div class="relative rounded-t-xl overflow-auto p-8">
        <div class="flex flex-nowrap gap-4 font-mono text-black text-2xl rounded-lg">
          <button class="p-4 w-full rounded-lg flex items-center justify-center bg-white shadow-lg"
            v-for="item in btStore" :key="item.id" @click="handleClick(item.id)">
            {{ item.title }}
          </button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="flex justify-center">
        <div v-if="btSelected === 'all'">
          <CustomerAll />
          <div class="flex justify-end mt-3">
            <router-link to="/cms/store/add">
              <ButtonAdd :icon="'ph:plus-light'" />
            </router-link>
          </div>
        </div>
        <div v-else-if="btSelected === 'new'">
          <CustomerNew />
        </div>
      </div>
    </template>
  </LayoutMain>
  <ButtonNav />
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import LayoutMain from '../LayoutMain.vue';
import ButtonNav from '../../components/ButtonNav.vue';
import SearchBar from '../../components/SearchBar.vue';
import ButtonTab from '../../components/ButtonTab.vue';
import CustomerAll from '../../components/CustomerAll.vue';
import CustomerNew from '../../components/CustomerNew.vue';
import ButtonAdd from '../../components/ButtonCircle.vue';

export default {
  components: {
    Icon,
    LayoutMain,
    ButtonNav,
    SearchBar,
    ButtonTab,
    CustomerAll,
    CustomerNew,
    ButtonAdd,
  },
  setup() {

    const btStoreAll = ref('ร้านค้าทั้งหมด');
    const btStoreNew = ref('ร้านค้าใหม่');
    const btSelected = ref('all');

    const btStore = computed(() => {
      return [
        { id: 'all', title: 'ร้านค้าทั้งหมด' },
        { id: 'new', title: 'ร้านค้าใหม่' },
      ];
    });
    const handleClick = (type) => {
      if (type === 'all') {
        btSelected.value = 'all'

      } else if (type === 'new') {
        btSelected.value = 'new'
      }
    }

    return {
      btStore,
      btStoreAll,
      btStoreNew,
      handleClick,
      btSelected,
    }
  },
};
</script>
