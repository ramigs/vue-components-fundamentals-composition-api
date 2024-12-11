<script setup lang="ts">
import { ref } from 'vue'

const hover = ref(false)
</script>

<template>
  <button @mouseenter="hover = true" @mouseleave="hover = false" class="btn">
    <slot name="emoji" :hover="hover"></slot> <slot>Submit</slot>
  </button>
</template>

<style scoped></style>
