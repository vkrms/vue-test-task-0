<script lang="ts" setup>
import Button from "./MyButton.vue";

// reset store
import { useStore } from "../store";
const store = useStore();
store.$reset();
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({})
</script>

<template>
  <h2>Hello There!</h2>
  <p>Let's buy some insurance. It is going to take only a few steps</p>

  <router-link to="/step2">
    <Button>Start</Button>
  </router-link>
</template>
