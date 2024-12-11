<script setup lang="ts">
import FancyButton from './components/FancyButton.vue'
import PlanPicker from './components/PlanPicker.vue'
</script>

<template>
  <main>
    <div class="content">
      <h1 class="title">Coffee Plans</h1>

      <h2 class="subtitle">
        We travel the world to source the very best single origin coffee for you
      </h2>
      <PlanPicker />
      <FancyButton>
        <template #emoji="{ hover }">{{ hover ? '👍' : '👎' }}</template>
        <template v-slot:default>Click me</template>
      </FancyButton>
    </div>
  </main>
</template>

<style scoped></style>
