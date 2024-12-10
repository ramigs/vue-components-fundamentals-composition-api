<script setup lang="ts">
import { ref } from 'vue'
import CoffeePlan from '@/components/CoffeePlan.vue'

const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()

const handleSelectedCoffeePlan = (plan: string) => {
  selectedCoffeePlan.value = plan
}
</script>

<template>
  <div class="plans">
    {{ selectedCoffeePlan }}
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedCoffeePlan"
      @click="handleSelectedCoffeePlan(plan)"
    />
  </div>
</template>

<style scoped></style>
