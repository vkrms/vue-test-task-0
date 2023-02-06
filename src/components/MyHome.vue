<script setup>
// import WelcomeItem from "./WelcomeItem.vue";
// import DocumentationIcon from "./icons/IconDocumentation.vue";
// import ToolingIcon from "./icons/IconTooling.vue";
// import EcosystemIcon from "./icons/IconEcosystem.vue";
// import CommunityIcon from "./icons/IconCommunity.vue";
// import SupportIcon from "./icons/IconSupport.vue";
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
