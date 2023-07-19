<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useRouter } from "vue-router";

import Button from "./MyButton.vue";
import { useStore } from "../store";
// import { storeToRefs } from "pinia";

type Package = [string, number]

interface Country {
  currency: string;
  rate: number;
}

interface Countries {
  [key: string]: Country;
}

const store = useStore();

const router = useRouter();

const countries: Countries = {
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

const packageIndex = ref(0);
const showModal = ref(false);

const basePremium = computed(() => {
  const rate = countries[store.country].rate;
  return 10 * store.age * rate;
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
  return countries[store.country].currency
});

// update store on computed
watchEffect(() => {
  store.currency = currency.value
  store.premium = finalPremium.value
  store.packageType = packageType.value
})


const getAddedPriceStr = (coeff: number) => {
  const addedPrice = Math.round(basePremium.value * coeff);

  const percentage = coeff * 100;

  return addedPrice > 0
    ? ` (+${addedPrice}${currency.value}, ${percentage}%)`
    : null;
};

function handleSubmit(e: Event) {
  e.preventDefault();

  if (store.age > 100) {
    openModal();
    return;
  }

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

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({})
</script>

<template>
  <form @submit="handleSubmit">
    <label class="form-group">
      <div class="label-text">Name</div>
      <input type="text" class="input" v-model="store.name" placeholder="Name" required />
    </label>

    <label class="form-group">
      <div class="label-text">Age</div>
      <input type="number" class="input" v-model="store.age" placeholder="Age" required />
    </label>

    <label class="form-group">
      <div class="label-text">Where do you live?</div>
      <select class="input" v-model="store.country">
        <option v-for="(val, country) in countries" :key="country">
          {{ country }}
        </option>
      </select>
    </label>

    <div class="radios">
      <div class="label-text">Choose your package</div>
      <label :key="name" v-for="([name, coeff], index) in packages" class="radio-label">
        <input type="radio" :key="name" :value="index" v-model="packageIndex" />

        <span class="">{{ name }} {{ getAddedPriceStr(coeff) }}</span>
      </label>
    </div>

    <h2>Your premium is: {{ finalPremiumStr }}</h2>

    <div class="buttons-wrap">
      <Button @click="router.go(-1)" class="secondary">Back</Button>
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
