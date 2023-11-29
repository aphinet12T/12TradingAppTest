<template>
  <div class="flex flex-col">
    <div class="bg-mainBg pt-2">
      <slot name="header" />
      <div class="bg-subBg sm:h-layout md:h-layout rounded-t-layout top-0 left-0 right-0">
        <slot name="body">
            <RouterView />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';
export default {
  components: {
    Icon,
  },
  setup() {

  },
};
</script>

<style></style>
