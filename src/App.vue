<script setup lang="ts">
import AppAlert from './components/AppAlert.vue'
import FancyButton from './components/FancyButton.vue'
import GithubCard from './components/GithubCard.vue'
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
      <div class="container" style="margin-bottom: 40px">
        <FancyButton>
          <template #emoji="{ hover }">{{ hover ? '👍' : '👎' }}</template>
          <template v-slot:default>Click me</template>
        </FancyButton>
      </div>
      <div class="github-cards" style="margin-bottom: 40px">
        <GithubCard username="danielkellyio" />
        <GithubCard username="hootlex" />
        <GithubCard username="MooseSaeed" />
      </div>
      <div class="container">
        <AppAlert type="info" @closed="console.log('received event closed')"
          >New software update available.</AppAlert
        >
        <AppAlert type="success">Your purchase has been confirmed!</AppAlert>
        <AppAlert type="warning">Warning: Invalid email address!</AppAlert>
        <AppAlert type="error">Error! Task failed successfully.</AppAlert>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
}

.github-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
}
</style>
