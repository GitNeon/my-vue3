/**
 * @Author: fanx
 * @Date: 2022年09月14日 11:03
 * @Description: file content
 */
import { onMounted, onUnmounted, ref } from 'vue';

export function useMouse() {
  const x = ref<number>(0);
  const y = ref<number>(0);

  function updateMousePosition(e: MouseEvent) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => window.addEventListener('mousemove', updateMousePosition));
  onUnmounted(() => window.removeEventListener('mousemove', updateMousePosition));

  return [x, y];
}
