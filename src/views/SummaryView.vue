<script setup>
import Button from "../components/MyButton.vue";
import { store } from "../components/store.js";
const { name, age, country, packageType, premium, currency } = store.submitted;

const list = {
  name,
  age,
  "Where do you live": country,
  package: packageType,
  premium: `${premium}${currency}`,
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>

<template>
  <div class="summary">
    <h2>Summary</h2>
    <h3>{{ name }}</h3>

    <ul>
      <li v-for="(val, key) in list" :key="key">
        {{ capitalize(key) }}: {{ val }}
      </li>
    </ul>
  </div>

  <div class="buttons-wrap">
    <Button class="secondary" @click="$router.go(-1)">Back</Button>
    <Button @click="$router.push('/')">Buy</Button>
  </div>
</template>

<style>
ul {
  list-style: none;
  padding: 0;
}
</style>
