import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard.vue'

describe('Dashboard.vue', () => {
  it('renders dashboard component', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.text()).toMatch('Dashboard')
  })

  // Ajouter plus de tests pour vérifier le comportement spécifique du tableau de bord
})
