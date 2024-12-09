<script setup lang="ts">
import CoffeePlan from './components/CoffeePlan.vue'
</script>

<template>
  <main>
    <div class="content">
      <h1 class="title">Coffee Plans</h1>

      <h2 class="subtitle">
        We travel the world to source the very best single origin coffee for you
      </h2>

      <div class="plans">
        <CoffeePlan name="The Single" />
        <CoffeePlan name="The Curious" />
        <CoffeePlan name="The Addict" />
        <CoffeePlan name="The Hacker" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
