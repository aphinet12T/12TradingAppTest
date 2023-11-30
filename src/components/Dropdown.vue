<template>
    <button 
      :id="dropdownId" 
      data-dropdown-toggle="dropdown"
      @click="toggleDropdown"
      class="w-full text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
      type="button"
    >
      {{ buttonText }}
      <Icon class="icon w-2.5 h-2.5 ms-3" icon="ep:arrow-down-bold" />
    </button>
  
    <div 
      id="dropdown" 
      v-if="isDropdownOpen"
      class="z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
    >
      <ul 
        class="py-2 text-xl text-gray-700" 
        :aria-labelledby="dropdownId"
      >
        <li v-for="(item, index) in dropdownItems" :key="index">
          <a 
            :href="item.link" 
            class="block px-4 py-2 hover:bg-gray-100"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  export default {
    components: {
        Icon,
    },
    props: {
      dropdownId: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        default: "กดเพื่อเลือก"
      },
      dropdownItems: {
        type: Array,
        default: () => []
      }
    },
    setup(props) {
      const isDropdownOpen = ref(false);
  
      function toggleDropdown() {
        isDropdownOpen.value = !isDropdownOpen.value;
      }
  
      return {
        isDropdownOpen,
        toggleDropdown
      };
    }
  };
  </script>
  