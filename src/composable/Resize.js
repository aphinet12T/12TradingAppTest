import { ref, onMounted, onUnmounted } from 'vue';

export default function useWindowDimensions() {
  const windowHeight = ref(window.innerHeight);
  const windowWidth = ref(window.innerWidth);

  const updateDimensions = () => {
    windowHeight.value = window.innerHeight;
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateDimensions);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions);
  });

  return {
    windowHeight,
    windowWidth,
  };
}
