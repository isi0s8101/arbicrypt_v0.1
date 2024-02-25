describe('App End-to-End Test', () => {
  it('Visits the app root url and checks for welcome message', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })

  // Ajouter plus de tests end-to-end pour couvrir les fonctionnalités clés de l'application
})
