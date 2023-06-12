// https://runthatline.com/vitest-mock-vue-router/

import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, test, vi, expect } from 'vitest'
import { RouteNames } from '@/router'
import MyForm from '@/components/MyForm.vue'
import { useRouter } from 'vue-router'

vi.mock('vue-router')

console.log({ RouteNames })

describe('Form', () => {
    useRouter.mockReturnValue({
        push: vi.fn(),
    })

    beforeEach(() => {
        useRouter().push.mockReset()
    })

    test(`navigates to your mom and something else probably`, async () => {
        const wrapper = shallowMount(MyForm)
        
        await wrapper.find('button').trigger('click')

        expect(something_to_happen)
    })
})