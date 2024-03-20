<template>
  <div class="flex flex-col">
    <div class="bg-mainBg pt-2">
      <slot name="header" />
        <div :style="{ 'height': `${deviceHeight}px` }" class="bg-subBg rounded-t-layout top-0 left-0 right-0">
        <slot name="body" class="absolute">
          <RouterView />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDisplaySize } from '../composable/DisplaySize'
const { deviceWidth,deviceHeight } = useDisplaySize()
console.log(deviceWidth.value);
</script>