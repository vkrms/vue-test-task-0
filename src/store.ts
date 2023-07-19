import { defineStore } from "pinia";

interface State {
  name?: string,
  age?: number,
  country: string,
  packageType: string,
  currency: string,
  premium: number,
  premiumStr: string,
}

export const useStore = defineStore("store", {
  state: (): State => ({
    name: undefined,
    age: undefined,
    country: "Hong Kong",
    packageType: "",
    currency: "",
    premium: 0,
    premiumStr: "",
  }),
  actions: {
    setWholeState(newState: State) {
      this.$state = newState;
    },
  },
})