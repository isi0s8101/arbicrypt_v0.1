import { shallowMount } from '@vue/test-utils'
import Profile from '@/components/Profile.vue'

describe('Profile.vue', () => {
  it('renders profile component', () => {
    const wrapper = shallowMount(Profile)
    expect(wrapper.text()).toMatch('Profile')
  })

  // Ajouter plus de tests pour vérifier le comportement spécifique de la page de profil
})
