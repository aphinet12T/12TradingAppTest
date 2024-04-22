<template>
    <div>
        <h2>ที่อยู่</h2>
    </div>
    <Address v-model:storeAddress="vAddress" v-model:selectedProvince="vProvince" v-model:selectedDistrict="vDistrict"
    v-model:selectedSubdistrict="vSubdistrict" v-model:selectedZipcode="vZipcode" @update:data="updateAddress" />
</template>

<script setup>
import { ref } from 'vue'
import Address from '../../components/mobile/OptionAddress.vue'

const vAddress = ref('')
const vProvince = ref('')
const vDistrict = ref('')
const vSubdistrict = ref('')
const vZipcode = ref('')

const updateAddress = (address) => {
    vAddress.value = address.storeAddress
    vProvince.value = address.selectedProvince
    vDistrict.value = address.selectedDistrict
    vSubdistrict.value = address.selectedSubdistrict
    vZipcode.value = address.selectedZipcode
}

</script>