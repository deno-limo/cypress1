///<reference types='cypress'/>

describe("filtering", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get(".new-todo").type("clean room{enter}");
    cy.get(".new-todo").type("Learn Javescript{enter}");
    cy.get(".new-todo").type("Use cypress{enter}");
    cy.get(".new-todo").type("cook{enter}");
    cy.get(".new-todo").type("Pray{enter}");
    cy.get(".new-todo").type("Reharse{enter}");

    cy.get(".todo-list li:nth-child(2) .toggle").click();
  });

  it('should filter"Active"Todos', () => {
    cy.contains("Active").click();

    cy.get(".todo-list li").should("have.length", 4);
  });
  it('should filter"All"Todos', () => {
    cy.contains("All").click();

    cy.get(".todo-list li").should("have.length", 5);
  });
  it('should filter"Complete"Todos', () => {
    cy.contains("Complete").click();

    cy.get(".todo-list li").should("have.length", 1);
  });
});
