import { defineStore } from "pinia";

interface State {
  name: string,
  age: number,
  country: string,
  packageType: string,
  currency: string,
  premium: number,
  premiumStr: string,
}

export const useStore = defineStore("store", {
  state: (): State => ({
    name: "",
    age: 0,
    country: "Hong Kong",
    packageType: "",
    currency: "",
    premium: 0,
    premiumStr: "",
  }),
})