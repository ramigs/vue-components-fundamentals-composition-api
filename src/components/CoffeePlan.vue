<script setup lang="ts">
/* const { name, selected = false } = defineProps<{ name: string; selected?: boolean }>() */

const { name, selected } = defineProps({
  name: {
    type: String,
    validator(value: string) {
      return value.startsWith('The')
    },
  },
  selected: { type: Boolean, default: false },
})
</script>

<template>
  <div class="plan" :class="{ 'active-plan': selected }">
    <div class="description">
      <span class="title"> {{ name }} </span>
    </div>
  </div>
</template>

<style scoped></style>
