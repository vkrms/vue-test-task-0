import { mount } from "@vue/test-utils";
import MyHome from "@/components/MyHome.vue";
import { it, expect, describe, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";

// todo: include pinia somehow?

describe("MyHome", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })


  it("renders a message", () => {
    const wrapper = mount(MyHome);

    expect(wrapper.find("h2").text()).toBe("Hello There!");
  });
});
