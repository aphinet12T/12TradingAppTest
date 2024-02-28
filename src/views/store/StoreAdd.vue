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
      <div class="flex flex-row items-center justify-between mt-1">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="tdesign:store" width="20" />
          <span class="ml-2">ข้อมูลร้านค้า</span>
        </div>
        <div class="mt-2 mr-8">
          <p class=" text-gray-500">*ข้อมูลบังคับ</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white h-64 w-card shadow-md rounded-lg mt-1 overflow-auto">
          <div class=" flex flex-col items-center mt-5">
            <div class="mb-1">
              <InputFeild :id="'storeName'" :label="'ชื่อร้านค้า'" :inputClass="'w-500 p-2.5'" :type="'text'"
                v-model="vStoreName" :isRequired="true">
              </InputFeild>
              <div class="flex justify-end">
                <span v-if="validation.vStoreName" class="text-sm font-light text-red-500">{{ validation.vStoreName }}</span>
                <!-- <span v-else class="block text-sm font-light text-gray-900 dark:text-white">ไม่เกิน 36 ตัวอักษร</span> -->
              </div>
            </div>
            <div class="mb-1">
              <InputFeild :id="'storeTax'" :label="'เลขที่ผู้เสียภาษี'" :inputClass="'w-500 p-2.5'" :type="'text'"
                v-model="vStoreTax" :maxlength="13">
              </InputFeild>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storeTel'" :label="'โทรศัพท์'" :inputClass="'w-220 p-2.5'" :type="'number'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'storeRoute'" :label="'เส้นทาง'" :inputClass="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storeType'" :label="'ประเภทร้านค้า'" :inputClass="'w-220 p-2.5'" :type="'number'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'lineId'" :label="'Line ID'" :inputClass="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
            <div class="mb-5">
              <InputFeild :id="'storeNote'" :label="'หมายเหตุ'" :inputClass="'w-500 p-2.5'" :type="'text'">
              </InputFeild>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between mt-1">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="tdesign:store" width="20" />
          <span class="ml-2">ที่อยู่</span>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white h-64 w-card shadow-md rounded-lg mt-2 overflow-auto">
          <div class=" flex flex-col items-center mt-3">
            <div class="mb-1">
              <InputFeild :id="'storeAddress'" :label="'ที่อยู่'" :inputClass="'w-500 p-2.5'" :type="'text'">
              </InputFeild>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storeTb'" :label="'ตำบล'" :inputClass="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'storeAp'" :label="'อำเภอ'" :inputClass="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <InputFeild :id="'storePv'" :label="'จังหวัด'" :inputClass="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
              <div class="mb-1 ml-5">
                <InputFeild :id="'storePc'" :label="'รหัสไปรษณีย์'" :inputClass="'w-220 p-2.5'" :type="'text'">
                </InputFeild>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between mt-1">
        <div class="mt-2 ml-8 flex items-center">
          <Icon icon="heroicons:camera-20-solid" width="20" />
          <span class="ml-2">ถ่ายภาพ</span>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-white w-card shadow-md rounded-lg mt-2">
          <div class="flex flex-row items-center justify-center mt-1">
            <div class="mb-2 flex items-center">
              <DrawerPicture :btClass="'px-5 py-2.5 me-2 mb-2 mt-2'" />
              <InputFeild :id="'storePicture'" :inputClass="'w-[430px] p-2.5'" :type="'text'" :isDisabled="true" v-model="imageName">
              </InputFeild>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-start">
        <div class="mt-2 ml-6 flex items-center">
          <input id="link-checkbox" type="checkbox" v-model="isChecked" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the 
            <a class="text-blue-600 hover:underline" @click="showPolicy = !showPolicy">terms and conditions</a>
          </label>
        </div>
      </div>
      <!-- <DrawerPolicy v-if="showPolicy" /> -->
      <DrawerPolicy @policyCheckboxChanged="toggleDrawer" />
      <div class="relative rounded-t-xl overflow-auto p-4">
        <div class="flex flex-nowrap gap-4 font-mono text-white text-2xl rounded-lg">
            <button class="p-4 w-full rounded-lg flex items-center justify-center shadow-lg" 
              :class="{ 'bg-green-500': isChecked, 'bg-gray-400': !isChecked }"
              type="button"
              :disabled="!isChecked"
              @click="sendData"
            >
                ถัดไป
            </button>
        </div>
    </div>

    </template>
  </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue'
import { ref, computed, reactive, watch } from 'vue'
import { useUploadStore } from '../../stores';
import LayoutSub from '../LayoutSub.vue'
import InputFeild from '../../components/InputFeild.vue'
import ButtonBack from '../../components/IconBack.vue'
import DrawerPolicy from '../../components/DrawerPolicy.vue'
import DrawerPicture from '../../components/DrawerPicture.vue'

export default {
  components: {
    Icon,
    LayoutSub,
    ButtonBack,
    InputFeild,
    DrawerPolicy,
    DrawerPicture
  },

  setup() {

    const imageName = ref('');
    const uploadStore = useUploadStore();
    watch(() => uploadStore.imageName, (newVal) => {
      if (newVal !== null) {
        imageName.value = uploadStore.imageName;
      }
    });

    const vStoreName = ref(null);
    const vStoreTax = ref(null);

    function validateInput(value) {
      return value === '' ? 'กรอกข้อมูล' : '';
    }

    const validation = reactive({
      vStoreName: computed(() => validateInput(vStoreName.value)),
      vStoreTax: computed(() => validateInput(vStoreTax.value))
    });

    const isChecked = ref(false)
    const toggleDrawer = (checked) => {
      isChecked.value = checked;
      
      this.toggleBottomDrawer();
    };
    // const showPolicy = ref(false)
    // const showPolicy = () => {
    //   provide('showPolicyDrawer', true);
    // };
    const sendData = () => {

      if (!vStoreName.value) {
        vStoreName.value = validateInput(vStoreName.value);
        return;
      }

      console.log('vStoreName :', vStoreName.value);
      console.log('vStoreTax :', vStoreTax.value);
    };

    return {
      imageName,
      vStoreName,
      vStoreTax,
      sendData,
      validation,
      isChecked,
      toggleDrawer,
    }

  }
}
</script>
