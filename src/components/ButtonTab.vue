<template>
  <button :class="buttonClass" @click="handleClick">{{ buttonText }}</button>
  </template>
<script>
export default {
    props: {
    buttonText: {
      type: String,
    },
    buttonClass: {
      type: String,
      default:
        'py-4 px-20 text-xl text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
    },
  },
  setup(props) {
    const handleClick = () => {
      // console.log('test');
    };

    return {
        handleClick,
        buttonText: props.buttonText,
    };
  },
}
</script>
