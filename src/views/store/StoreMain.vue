<template>
  <LayoutMain>
    <template v-slot:header>
      <div class="flex items-center justify-between pb-32">
        <div class="flex justify-end ml-2">
          <Icon class="icon" height="60" width="60" icon="ic:baseline-store" />
          <div class=" text-4xl mt-2">ร้านค้า</div>
        </div>
        <div class="flex justify-end mr-2">
          <SearchBar />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex justify-start">
          <ButtonTab :buttonText="btStoreAll" class="absolute top-28 left-5" @click="dataStore('all')"></ButtonTab>
        </div>
        <div class="flex justify-end">
          <ButtonTab :buttonText="btStoreNew" class="absolute top-28 left-80" @click="dataStore('new')"></ButtonTab>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="flex justify-center">
        <div v-if="btSelected === 'all'">
          <CustomerAll />
          <router-link to="/cms/store/add">
            <div class="flex justify-end mt-3">
              <ButtonAdd />
            </div>
          </router-link>
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
import { ref } from 'vue';
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

    const dataStore = (type) => {
      if (type === 'all') {
        btSelected.value = 'all'

      } else if (type === 'new') {
        btSelected.value = 'new'
      }
    }

    return {
      btStoreAll,
      btStoreNew,
      dataStore,
      btSelected,
    }
  },
};
</script>
