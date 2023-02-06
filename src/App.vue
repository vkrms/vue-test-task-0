<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="step-body">
    <router-view v-slot="{ Component }">
      <keep-alive include="FormView">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>
.step-body {
  max-width: 420px;
  margin: 0 auto;
  background: #f7f7f7;
  padding: 24px 24px 32px;
  border-radius: 12px;
  color: #333;
  text-align: center;
}
</style>
