<script setup lang="ts">
import { computed, ref } from 'vue'

type AlertType = 'info' | 'success' | 'warning' | 'error'

const { type } = defineProps<{ type: AlertType }>()

const emit = defineEmits<{
  closed: []
}>()

const alertType = computed(() => {
  return {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  }[type]
})

const icons = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning:
    'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
}

const closed = ref(false)

const close = () => {
  closed.value = true
  emit('closed')
}
</script>

<template>
  <div v-if="!closed" role="alert" :class="`alert ${alertType} m-2`">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-6 w-6 shrink-0 stroke-current"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icons[type]"></path>
    </svg>
    <div style="width: 100%; display: flex; justify-content: space-between">
      <slot name="default"></slot><button @click="close">ⅹ</button>
    </div>
  </div>
</template>

<style scoped></style>
