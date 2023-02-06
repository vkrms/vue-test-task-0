<script setup>
import { RouterLink } from "vue-router";
import Button from "./MyButton.vue";
</script>

<template>
  <h2>Hello There!</h2>
  <p>Let's buy some insurance. It is going to take only a few steps</p>

  <router-link to="/step2">
    <Button>Start</Button>
  </router-link>
</template>
