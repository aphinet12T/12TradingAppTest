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
              <InputForm :id="'storeName'" :label="'ชื่อร้านค้า'" :class="'w-500 p-2.5'" :type="'text'" v-model="vStoreName" :isRequired="true">
              </InputForm>
              <!-- <span v-if="storeNameError" class="text-red-500">{{ storeNameError }}</span> -->
              <div class="flex justify-end">
                <label for="storeName" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36
                  ตัวอักษร</label>
              </div>
            </div>
            <div class="mb-1">
              <InputForm :id="'storeTax'" :label="'เลขที่ผู้เสียภาษี'" :class="'w-500 p-2.5'" :type="'text'" v-model="vStoreTax">
              </InputForm>
              <!-- <span v-if="storeNameError" class="text-red-500">{{ storeNameError }}</span> -->
              <div class="flex justify-end">
                <label for="storeTax" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน
                  13 ตัวอักษร</label>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputForm :id="'storeTel'" :label="'โทรศัพท์'" :class="'w-220 p-2.5'" :type="'number'">
                </InputForm>
              </div>
              <div class="mb-1 ml-5">
                  <InputForm :id="'storeRoute'" :label="'เส้นทาง'" :class="'w-220 p-2.5'" :type="'text'">
                </InputForm>
              </div>
            </div>
            <div class="mb-1">
                <InputForm :id="'storetype'" :label="'ประเภทร้านค้า'" :class="'w-500 p-2.5'" :type="'text'">
                </InputForm>
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
                <InputForm :id="'storeAddress'" :label="'ที่อยู่'" :class="'w-500 p-2.5'" :type="'text'">
                </InputForm>
              <div class="flex justify-end">
                <label for="storeName" class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36
                  ตัวอักษร</label>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                  <InputForm :id="'storeTb'" :label="'ตำบล'" :class="'w-220 p-2.5'" :type="'text'">
                </InputForm>
              </div>
              <div class="mb-1 ml-5">
                  <InputForm :id="'storeAp'" :label="'อำเภอ'" :class="'w-220 p-2.5'" :type="'text'">
                </InputForm>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                  <InputForm :id="'storePv'" :label="'จังหวัด'" :class="'w-220 p-2.5'" :type="'text'">
                </InputForm>
              </div>
              <div class="mb-1 ml-5">
                  <InputForm :id="'storePc'" :label="'รหัสไปรษณีย์'" :class="'w-220 p-2.5'" :type="'text'">
                </InputForm>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="sendData">Submit</button>
    </template>
  </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import LayoutSub from '../LayoutSub.vue';
import InputForm from '../../components/InputForm.vue';
import ButtonBack from '../../components/IconBack.vue';

export default {
  components: {
    Icon,
    LayoutSub,
    ButtonBack,
    InputForm,
  },

  setup() {

    const vStoreName = ref('');
    const vStoreTax = ref('');
    const validateText = ref('');
    const sendData = () => {
      // store.setName(nameInput.value);
      // store.setArea(areaInput.value);
      // store.setProvince(provinceInput.value);
      // if (!vStoreName.value.trim() | !vStoreTax.value.trim()) {
      //   storeNameError.value = 'กรุณากรอกข้อมูล';
      //   return; // หยุดการทำงานของฟังก์ชันถ้าข้อมูลไม่ถูกต้อง
      // }
      // store.sendDataToAPI();
      console.log('vStoreName :',vStoreName.value);
      console.log('vStoreTax :',vStoreTax.value);
    };

    return {
      vStoreName,
      vStoreTax,
      sendData,
      validateText,
    };

  }
}
</script>
