<script setup lang="ts">
const { name } = defineProps<{ name: string }>()
</script>

<template>
  <div class="plan">
    <div class="description">
      <span class="title"> {{ name }} </span>
    </div>
  </div>
</template>

<style scoped></style>
