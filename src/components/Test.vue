<template>
    <h2>{{ size.browserWidth }} pixels: Browser </h2>
    <h2>{{ size.deviceWidth }} pixels: Device</h2>
    <h2>{{ size.isMobile }} </h2>
</template>

<script setup>
import { onMounted, watchEffect } from 'vue'
import { useDisplaySize } from '../composable/DisplaySize'
const size = useDisplaySize()
onMounted(() => {
    console.log('size', size.isMobile.value)
})
watchEffect( () => {
    if (size.isMobile.value) {
        console.log('size', size.isMobile.value)
    }
});
</script>