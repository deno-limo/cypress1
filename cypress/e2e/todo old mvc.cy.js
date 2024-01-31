///<reference types='cypress'/>

describe('filtering',()=>{
    beforeEach(()=>{
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
   
    cy.get('.new-todo').type('clea room{enter}')
    cy.get('.new-todo').type('Lear Javescript{enter}')
    cy.get('.new-todo').type('User cypress{enter}')
    cy.get('.new-todo').type('cookr{enter}')
    cy.get('.new-todo').type('Prayw{enter}')

    cy.get('.todo-list li:nth-child(2) .toggle').click()
    
    })

    it('should filter"Active"Todos',()=>{
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length',4)


    })
    it('should filter"All"Todos',()=>{
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length',5)


    })
    it('should filter"Complete"Todos',()=>{
        cy.contains('Complete').click()

        cy.get('.todo-list li').should('have.length',1)


    })
})