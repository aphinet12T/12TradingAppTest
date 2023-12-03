<template>
  <button :id="dropdownId" data-dropdown-toggle="dropdown"
    class="w-44 text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
    type="button">
    {{ buttonText }}
    <Icon class="icon w-2.5 h-2.5 ms-3" icon="ep:arrow-down-bold" />
  </button>

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="dropdownId">
      <li v-for="(item, index) in dropdownItems" :key="index">
        <a :href="item.link" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { initDropdowns } from 'flowbite'

export default {
  props: {
    dropdownId: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "กดเพื่อเลือก"
    },
    dropdownItems: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Icon,
  },
  setup() {
    onMounted(() => {
      initDropdowns();
    })
  },
};
</script>
