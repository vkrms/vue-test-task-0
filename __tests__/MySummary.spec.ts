import { beforeEach, test, describe, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import Summary from "@/components/MySummary.vue";
import { useStore } from "@/store";
import { setActivePinia, createPinia } from "pinia";

describe("MySummary displays things", () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const store = useStore();
    store.setWholeState({
      name: "John Doe",
      age: 30,
      country: "United States",
      packageType: "Basic",
      premium: 100,
      currency: "$",
    })
  })

  test("renders summary info correctly", async () => {
    const wrapper = mount(Summary);

    expect(wrapper.find("h3").text()).toBe("John Doe");
    expect(wrapper.findAll("li").length).toBe(5);
    expect(wrapper.text()).toContain("Name: John Doe");
    expect(wrapper.text()).toContain("Age: 30");
    expect(wrapper.text()).toContain("Where do you live: United States");
    expect(wrapper.text()).toContain("Package: Basic");
    expect(wrapper.text()).toContain("Premium: 100$");
  })
})
