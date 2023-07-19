// https://runthatline.com/vitest-mock-vue-router/
import { setActivePinia, createPinia } from 'pinia'

import { mount } from '@vue/test-utils'
import { beforeEach, describe, test, vi, expect } from 'vitest'
import { RouteNames } from '@/router'
import MyForm from '@/components/MyForm.vue'
import { useRouter } from 'vue-router'

vi.mock('vue-router')

console.log({ RouteNames })

describe('Form', () => {
    useRouter.mockReturnValue({
        go: vi.fn(),
    })

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
        useRouter().go.mockReset()
    })

    test(`navigates to your mom and something else probably`, async () => {
        const wrapper = await mount(MyForm)
        wrapper.find('button').trigger('click')

        expect(useRouter().go).toHaveBeenCalledWith(-1)
    })
})