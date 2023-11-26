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
          <Icon icon="tdesign:store" width="20" />
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
              <InputFeild :id="'storeName'" :label="'ชื่อร้านค้า'" :class="'w-500 p-2.5'" :type="'text'"
                v-model="vStoreName" :isRequired="true">
              </InputFeild>
              <div class="flex justify-end">
                <span v-if="validation.vStoreName" class="text-sm font-light text-red-500">{{ validation.vStoreName }}</span>
                <span v-else class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36 ตัวอักษร</span>
              </div>
            </div>
            <div class="mb-1">
              <InputFeild :id="'storeTax'" :label="'เลขที่ผู้เสียภาษี'" :class="'w-500 p-2.5'" :type="'text'"
                v-model="vStoreTax" :maxlength="13">
              </InputFeild>
              <div class="flex justify-end">
                <label for="storeTax" class="block text-sm font-light text-gray-900 dark:text-white">
                  ไม่เกิน 13 ตัวอักษร
                </label>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storeTel'" :label="'โทรศัพท์'" :class="'w-220 p-2.5'" :type="'number'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'storeRoute'" :label="'เส้นทาง'" :class="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
            <div class="mb-1">
              <InputFeild :id="'storetype'" :label="'ประเภทร้านค้า'" :class="'w-500 p-2.5'" :type="'text'">
              </InputFeild>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between mt-3">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="tdesign:store" width="20" />
          <span class="ml-2">ที่อยู่</span>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white h-72 w-card shadow-md rounded-lg mt-2">
          <div class=" flex flex-col items-center mt-5">
            <div class="mb-1">
              <InputFeild :id="'storeAddress'" :label="'ที่อยู่'" :class="'w-500 p-2.5'" :type="'text'">
              </InputFeild>
              <div class="flex justify-end">
                <label for="storeName" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36
                  ตัวอักษร</label>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storeTb'" :label="'ตำบล'" :class="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'storeAp'" :label="'อำเภอ'" :class="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storePv'" :label="'จังหวัด'" :class="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'storePc'" :label="'รหัสไปรษณีย์'" :class="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="sendData" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </template>
  </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref, computed, reactive } from 'vue';
import LayoutSub from '../LayoutSub.vue';
import InputFeild from '../../components/InputFeild.vue';
import ButtonBack from '../../components/IconBack.vue';

export default {
  components: {
    Icon,
    LayoutSub,
    ButtonBack,
    InputFeild
  },

  setup() {

    const vStoreName = ref(null);
    const vStoreTax = ref(null);

    function validateInput(value) {
      return value === '' ? 'กรอกข้อมูล' : '';
    }

    const validation = reactive({
      vStoreName: computed(() => validateInput(vStoreName.value)),
      vStoreTax: computed(() => validateInput(vStoreTax.value))
    });
    
    const sendData = () => {
      
      if (!vStoreName.value) {
        vStoreName.value = validateInput(vStoreName.value);
        return;
      }
      // store.sendDataToAPI();
      console.log('vStoreName :', vStoreName.value);
      console.log('vStoreTax :', vStoreTax.value);
    };

    return {
      vStoreName,
      vStoreTax,
      sendData,
      validation
    };

  }
}
</script>
