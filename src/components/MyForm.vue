<script setup>
import Button from "./MyButton.vue";

import { store } from "./store.js";
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

<script>
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

const packages = [
  ["Standard", 0],
  ["Safe", 0.5],
  ["Super Safe", 0.75],
];

export default {
  data() {
    return {
      name: "",
      age: null,
      country: "Hong Kong",
      packageType: "",
      currency: "",
      packageIndex: 0,
      showModal: false,
    };
  },

  computed: {
    basePremium() {
      const rate = countries[this.country].rate;
      return 10 * this.age * rate;
    },

    finalPremiumStr() {
      return this.finalPremium > 0
        ? `${this.finalPremium}${this.currency}`
        : "...";
    },

    finalPremium() {
      const coeff = packages[this.packageIndex][1];
      return Math.round(this.basePremium * (1 + coeff));
    },
  },

  watch: {
    packageIndex: {
      handler(newIndex) {
        this.packageType = packages[newIndex][0];
      },
      immediate: true,
    },

    country: {
      handler(newCountry) {
        this.currency = countries[newCountry].currency;
      },
      immediate: true,
    },
  },

  methods: {
    getAddedPriceStr(coeff) {
      const addedPrice = this.basePremium * coeff;

      const percentage = coeff * 100;

      return addedPrice > 0
        ? ` (+${addedPrice}${this.currency}, ${percentage}%)`
        : null;
    },

    handleSubmit(e) {
      e.preventDefault();

      if (this.age > 100) {
        this.openModal();
        return;
      }

      // send data to store for future use
      const { name, age, country, packageType, currency } = this;
      store.submitted = {
        name,
        age,
        country,
        packageType,
        currency,
        premium: this.finalPremium,
      };

      this.$router.push("/summary");
    },

    handleModalBtn() {
      this.showModal = false;
      this.$router.push("/");
    },

    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
@import "./MyForm.css";
</style>
