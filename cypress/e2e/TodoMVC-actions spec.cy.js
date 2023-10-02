///<reference types="cypress"/>
describe('Todo actions',()=>{
  beforeEach(()=>{
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
   
    cy.get('.new-todo').type('clean room{enter}')

  })
it('should be able to add to the list',()=>{
         
    cy.get('label').should('have.text','clean room')
    
    cy.get('.toggle').should('not.be.checked')

  })
  it('should mark todo as completed',()=>{
  
    cy.get('.toggle').click()
   
    cy.get('label').should('have.css','text-decoration-line','line-through')

  })

  it('should be able to clear completed',()=>{
    
    cy.get('.toggle').click()
    
    cy.contains('Clear').click()
    
    cy.get('.todo-list').should('not.have.descendants','li')
    
  })
})
