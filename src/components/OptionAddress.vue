<template>
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
</template>
      
<script setup>
import InputFeild from '../components/InputFeild.vue'
</script>