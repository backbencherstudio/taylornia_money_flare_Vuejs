<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="auth-page">
    <h1>Welcome back</h1>
    <p>Use your account to continue.</p>
    <div class="actions">
      <button type="button">Sign in</button>
      <button class="ghost" type="button">Create account</button>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  display: grid;
  gap: 12px;
}

h1 {
  font-size: 1.6rem;
  margin: 0;
}

p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 500;
  cursor: pointer;
  background: linear-gradient(135deg, #ffd56a, #ff7a5c);
  color: #101113;
}

button.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #f7f6f2;
}
</style>
