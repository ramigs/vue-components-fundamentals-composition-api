<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

const { username } = defineProps<{ username: string }>()

/* const name = ref('')
const url = ref('')
const followers = ref(0)
const following = ref(0)
const avatar = ref('') */

type UserResponse = { [key: string]: unknown } & {
  name: string
  html_url: string
  followers: number
  following: number
  avatar_url: string
}

const user: Ref<UserResponse | undefined> = ref(undefined)

onMounted(async () => {
  const data = await fetch(`https://api.github.com/users/${username}`)
  user.value = await data.json()
})
</script>

<template>
  <div v-if="user" class="card card-side bg-base-100 shadow-xl m-2">
    <figure>
      <img :src="user.avatar_url" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>Followers: {{ user.followers }}</p>
      <p>Following: {{ user.following }}</p>
      <div class="card-actions justify-end">
        <a class="btn btn-primary" :href="user.html_url">View Profile</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body :where(p) {
  flex-grow: unset;
}

.card-actions {
  margin-top: auto;
}
</style>
