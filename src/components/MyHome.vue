<script lang="ts">
import Button from "./MyButton.vue";

import { defineComponent } from "vue";

export default defineComponent({})
</script>

<template>
  <h2>Hello There!</h2>
  <p>Let's buy some insurance. It is going to take only a few steps</p>

  <router-link to="/step2">
    <!-- it woudl be ideal to clear the KeepAlive cached state
      when start is clicked, but there's no easy way -->
    <Button>Start</Button>
  </router-link>
</template>
