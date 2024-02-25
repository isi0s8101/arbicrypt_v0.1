import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('renders login form', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.text()).toMatch('Login')
  })

  // Ajouter plus de tests pour vérifier le comportement du formulaire de connexion
})
