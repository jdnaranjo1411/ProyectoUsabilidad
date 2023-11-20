import {shallowMount} from '@vue/test-utils'
import HeaderHamburguer from '@/components/HeaderHamburguer.vue'

describe('HeaderHamburguer.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HeaderHamburguer, {
            propsData: {msg}
        })
        expect(wrapper.text()).toMatch(msg)
    })
})