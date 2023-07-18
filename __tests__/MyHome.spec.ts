import { mount } from "@vue/test-utils";
import MyHome from "@/components/MyHome.vue";
import { it, expect, describe } from "vitest";

// todo: include pinia somehow?

describe("MyHome", () => {
  it("renders a message", () => {
    const wrapper = mount(MyHome);

    expect(wrapper.find("h2").text()).toBe("Hello There!");
  });
});
