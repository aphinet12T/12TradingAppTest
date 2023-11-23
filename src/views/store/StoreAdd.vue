<template>
  <LayoutSub>
    <template v-slot>
      <div class="flex flex-row items-center">
        <div class="mt-2">
          <ButtonBack />
        </div>
        <div class="mt-2 ml-2 flex items-center">
          <Icon icon="tdesign:store" width="40" />
          <span class="ml-2">เพิ่มร้านค้า</span>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between mt-3">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="tdesign:store" width="20"/>
          <span class="ml-2">ข้อมูลร้านค้า</span>
        </div>
        <div class="mt-2 mr-8">
          <p class=" text-gray-500">*ข้อมูลบังคับ</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white h-96 w-card shadow-md rounded-lg mt-2">
          <div class=" flex flex-col items-center mt-5">
            <div class="mb-1">
              <!-- <label for="storeName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อร้านค้า</label>
              <input type="text" id="storeName" v-model="vStoreName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required> -->
              <InputForm :label="'ชื่อร้านค้า'" :class="'w-500 p-2.5'" :type="'text'" v-model="vStoreName">
              </InputForm>
              <div class="flex justify-end">
                <label for="storeName" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36
                  ตัวอักษร</label>
              </div>
            </div>
            <div class="mb-1">
              <label for="storeTax"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่ผู้เสียภาษี</label>
              <input type="text" id="storeTax"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
              <div class="flex justify-end">
                <label for="storeTax" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน
                  13 ตัวอักษร</label>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1 mt-">
                <label for="storeTel"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">โทรศัพท์</label>
                <input type="number" id="storeTel"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
              </div>
              <div class="mb-1 ml-5">
                <label for="storeRoute"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เส้นทาง</label>
                <input type="text" id="storeRoute"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
              </div>
            </div>
            <div class="mb-1">
              <label for="storeName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทร้านค้า</label>
              <input type="text" id="storeName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between mt-3">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="tdesign:store" width="20"/>
          <span class="ml-2">ที่อยู่</span>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white h-72 w-card shadow-md rounded-lg mt-2">
          <div class=" flex flex-col items-center mt-5">
            <div class="mb-1">
              <label for="storeName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่</label>
              <input type="text" id="storeName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
              <div class="flex justify-end">
                <label for="storeName" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36
                  ตัวอักษร</label>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1 mt-">
                <label for="storeTel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ตำบล</label>
                <input type="number" id="storeTel"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
              </div>
              <div class="mb-1 ml-5">
                <label for="storeRoute" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อำเภอ</label>
                <input type="text" id="storeRoute"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1 mt-">
                <label for="storeTel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จังหวัด</label>
                <input type="number" id="storeTel"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
              </div>
              <div class="mb-1 ml-5">
                <label for="storeRoute"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสไปรษณีย์</label>
                <input type="text" id="storeRoute"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-220 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex flex-row items-center justify-between mt-3">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="tdesign:store" width="20"/>
          <span class="ml-2">ถ่ายภาพ</span>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white h-20 w-card shadow-md rounded-lg mt-2">
          <div class="flex items-center mt-5 relative">
            <button
              class="overflow-y-auto absolute left-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
              ถ่าย
            </button>
            <input type="text"
              class="block w-500 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
          </div>
        </div>
      </div>
      <div id="drawer-bottom-example" class="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none" tabindex="-1" aria-labelledby="drawer-bottom-label">
    <h5 id="drawer-bottom-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>Bottom drawer</h5>
    <button type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
    <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
   <a href="#" class="px-4 py-2 me-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
   <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
</div> -->
    </template>
  </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import LayoutSub from '../LayoutSub.vue';
import InputForm from '../../components/InputForm.vue';
import ButtonBack from '../../components/IconBack.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export default {
  components: {
    Icon,
    LayoutSub,
    ButtonBack,
    InputForm,
  },

  setup() {

    onMounted(() => {
      initFlowbite();
    })

    const vStoreName = ref('');
    // const areaInput = ref('');
    // const provinceInput = ref('');

    const sendData = () => {
      // store.setName(nameInput.value);
      // store.setArea(areaInput.value);
      // store.setProvince(provinceInput.value);

      store.sendDataToAPI();
    };

    return {
      vStoreName,
      sendData,
    };

  }
}
</script>
