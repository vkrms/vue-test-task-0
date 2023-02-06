import { reactive } from "vue";

export const store = reactive({
  submitted: {
    name: "",
    age: 0,
    country: "Hong Kong",
    packageType: "",
    currency: "",
    premium: 0,
  },
});
