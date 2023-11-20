<template>
    <div
      class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 flex justify-between"
    >
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="buttonClass(index)"
        @click="handleClick(index)"
      >
        <Icon :icon="button.icon" :class="iconClass(index)" />
        <span :class="textClass(index)">{{ button.label }}</span>
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { Icon } from "@iconify/vue";
  
  export default {
    components: {
      Icon,
    },
    setup() {
      const buttons = ref([
        {
          label: "หน้าแรก",
          icon: "ic:round-home",
        },
        {
          label: "เข้าเยี่ยม",
          icon: "eos-icons:route",
        },
        {
          label: "ร้านค้า",
          icon: "tdesign:store",
        },
        {
          label: "ขาย",
          icon: "mdi:marketplace-outline",
        },
        {
          label: "จัดการ",
          icon: "fluent-mdl2:product-release",
        },
        {
          label: "ตั้งค่า",
          icon: "pepicons-pop:dots-x",
        },
      ]);
  
      const buttonClass = (index) => [
        "inline-flex",
        "flex-col",
        "items-center",
        "justify-center",
        "px-5",
        "dark:hover:bg-gray-800",
        "group",
      ];
  
      const iconClass = (index) => [
        "w-8",
        "h-8",
        "mb-0",
        "text-gray-500",
        "dark:text-gray-400",
        "group-hover:text-blue-600",
        "dark:group-hover:text-blue-500",
      ];
  
      const textClass = (index) => [
        "text-sm",
        "text-gray-500",
        "dark:text-gray-400",
        "group-hover:text-blue-600",
        "dark:group-hover:text-blue-500",
      ];
  
      const handleClick = (index) => {
        console.log("clicked:", buttons.value[index].label);
      };
  
      return {
        buttons,
        buttonClass,
        textClass,
        iconClass,
        handleClick,
      };
    },
  };
  </script>
  