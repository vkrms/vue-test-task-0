import { beforeEach, test, describe, expect } from 'vitest';
import { redirectHomeCond } from '@/router'
// import { mount } from "@vue/test-utils";
// import Summary from "@/components/MySummary.vue";
import { setActivePinia, createPinia } from "pinia";

describe("index is covered", () => {
  // beforeEach(() => {
  //   // setActivePinia(createPinia())
  // })

  test("won't allow direct access to /step2", () => {
    expect(redirectHomeCond(null, { name: undefined })).toBe({ name: "home" });

    // const wrapper = mount(Summary);

    // expect(wrapper.find("h3").text()).toBe("John Doe");
    // expect(wrapper.findAll("li").length).toBe(5);
    // expect(wrapper.text()).toContain("Name: John Doe");
    // expect(wrapper.text()).toContain("Age: 30");
    // expect(wrapper.text()).toContain("Where do you live: United States");
    // expect(wrapper.text()).toContain("Package: Basic");
    // expect(wrapper.text()).toContain("Premium: 100$");
  })
})
