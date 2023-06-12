<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import Button from "./MyButton.vue";

import { store } from "../store.js";

type Package = [string, number]
type Country = 'Hong Kong' | 'USA' | 'Australia'

const router = useRouter();

const countries = {
  "Hong Kong": {
    currency: "HKD",
    rate: 1,
  },
  USA: {
    currency: "USD",
    rate: 2,
  },
  Australia: {
    currency: "AUD",
    rate: 3,
  },
};

const packages: Package[] = [
  ["Standard", 0],
  ["Safe", 0.5],
  ["Super Safe", 0.75],
];

const name = ref("");
const age = ref(0);
const country = ref<Country>("Hong Kong");
const packageIndex = ref(0);
const showModal = ref(false);

const basePremium = computed(() => {
  const rate = countries[country.value].rate;
  return 10 * age.value * rate;
});

const finalPremiumStr = computed(() => {
  return finalPremium.value > 0
    ? `${finalPremium.value}${currency.value}`
    : "...";
});

const finalPremium = computed(() => {
  const coeff = packages[packageIndex.value][1];
  return Math.round(basePremium.value * (1 + coeff));
});

const packageType = computed(() => {
  return packages[packageIndex.value][0];
});

const currency = computed(() => {
  return countries[country.value].currency;
});

const getAddedPriceStr = (coeff: number) => {
  const addedPrice = Math.round(basePremium.value * coeff);

  const percentage = coeff * 100;

  return addedPrice > 0
    ? ` (+${addedPrice}${currency.value}, ${percentage}%)`
    : null;
};

function handleSubmit(e: Event) {
  e.preventDefault();

  if (age.value > 100) {
    openModal();
    return;
  }

  // send data to store for future use
  // const { name, age, country, packageType, currency } = this;
  store.submitted = {
    name: name.value,
    age: age.value,
    country: country.value,
    packageType: packageType.value,
    currency: currency.value,
    premium: finalPremium.value,
  };

  router.push("/summary");
}

function handleModalBtn() {
  showModal.value = false;
  router.push("/");
}

function openModal() {
  showModal.value = true;
}
</script>

<template>
  <form @submit="handleSubmit">
    <label class="form-group">
      <div class="label-text">Name</div>
      <input type="text" class="input" v-model="name" required />
    </label>

    <label class="form-group">
      <div class="label-text">Age</div>
      <input type="number" class="input" v-model="age" required />
    </label>

    <label class="form-group">
      <div class="label-text">Where do you live?</div>
      <select class="input" v-model="country">
        <option v-for="(val, country) in countries" :key="country">
          {{ country }}
        </option>
      </select>
    </label>

    <div class="radios">
      <label
        :key="name"
        v-for="([name, coeff], index) in packages"
        class="radio-label"
      >
        <input type="radio" :key="name" :value="index" v-model="packageIndex" />

        <span class="">{{ name }} {{ getAddedPriceStr(coeff) }}</span>
      </label>
    </div>

    <h2>Your premium is: {{ finalPremiumStr }}</h2>

    <div class="buttons-wrap">
      <Button @click="$router.go(-1)" class="secondary">Back</Button>
      <Button type="submit">Next</Button>
    </div>
  </form>

  <div class="modal-fade" :class="{ showModal }">
    <div class="modal-body">
      <h2>Ooops</h2>
      <p>
        Your age is over our accepted limit.<br />
        We are sorry but we cannot insure you now
      </p>
      <Button @click="handleModalBtn">Ok :(</Button>
    </div>
  </div>
</template>

<style scoped>
@import "./MyForm.css";
</style>
