<template>
    <LayoutMain>
      <template v-slot:header>
        <div class="flex items-center justify-between pb-32">
          <div class="flex justify-end ml-5">
            <Icon class="icon" height="50" width="50" icon="fluent:drawer-add-24-regular" />
            <div class=" text-4xl mt-2 ml-5 font-medium">จัดการ</div>
          </div>
          <div class="flex justify-end mr-2">
            <SearchBar />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex justify-start">
            <ButtonTab :buttonText="btRefund" class="absolute top-28 left-5" @click="dataManage('refund')"></ButtonTab>
          </div>
          <div class="flex justify-end">
            <ButtonTab :buttonText="btGive" class="absolute top-28 left-80" @click="dataManage('give')"></ButtonTab>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="flex justify-center">
          <div v-if="btSelected === 'refund'">
            <CustomerAll />
            <router-link to="/cms/manage/refund">
              <div class="flex justify-end mt-3">
                <ButtonAdd :icon="'ph:plus-light'" />
              </div>
            </router-link>
          </div>
          <div v-else-if="btSelected === 'give'">
            <CustomerNew />
          </div>
        </div>
      </template>
    </LayoutMain>
    <ButtonNav />
</template>
  
<script>
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import LayoutMain from '../LayoutMain.vue'
import ButtonNav from '../../components/tablet/ButtonNav.vue'
import SearchBar from '../../components/tablet/SearchBar.vue'
import ButtonTab from '../../components/tablet/ButtonTab.vue'
import CustomerAll from '../../components/tablet/CustomerAll.vue'
import CustomerNew from '../../components/tablet/CustomerNew.vue'
import ButtonAdd from '../../components/tablet/ButtonCircle.vue'

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

    const btRefund = ref('เปลี่ยนสินค้า');
    const btGive = ref('แจกสินค้า');
    const btSelected = ref('refund');

    const dataManage = (type) => {
      if (type === 'refund') {
        btSelected.value = 'refund'

      } else if (type === 'give') {
        btSelected.value = 'give'
      }
    }

    return {
      btRefund,
      btGive,
      dataManage,
      btSelected,
    }
  },
};
</script>
  