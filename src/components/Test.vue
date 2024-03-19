<template>
    <h2>{{ size.browserWidth }} pixels: Browser </h2>
    <h2>{{ size.deviceWidth }} pixels: Device</h2>
    <h2>{{ size.isMobile }} </h2>
</template>

<script setup>
import { useDisplaySize } from '../composable/DisplaySize'
const size = useDisplaySize()
</script>