describe('todo list', () => {

  it("should show a to-do list to make ", () => {

    cy.visit('https://longyearbye.github.io/todo-list/')
    cy.get("textarea").type("make homework")
    cy.contains("button", "Add task").click()
    cy.get("#todo-list").contains("make homework").should("be.visible")
    cy.get("#todo-list").click()
    cy.get(".checked").should("be.visible")
    cy.get("span").should("be.visible").click()
    cy.get('#todo-list').filter('make homework').should('not.exist')

  })
})