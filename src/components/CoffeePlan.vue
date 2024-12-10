<script setup lang="ts">
const { name, selected = false } = defineProps<{ name: string; selected?: boolean }>()
</script>

<template>
  <div class="plan" :class="{ 'active-plan': selected }">
    <div class="description">
      <span class="title"> {{ name }} </span>
    </div>
  </div>
</template>

<style scoped></style>
