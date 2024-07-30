describe('Add/Remove Elements', () => {
    it('should add and remove elements', () => {
      cy.visit('/add_remove_elements/');
  
      cy.get('button').contains('Add Element').click(); // Додати елемент
      cy.get('.added-manually').should('have.length', 1); // Перевірити, що є один елемент
  
      cy.get('button').contains('Add Element').click(); // Додати ще один елемент
      cy.get('.added-manually').should('have.length', 2); // Перевірити, що є два елементи
  
      cy.get('.added-manually').eq(0).click(); // Видалити один з елементів
      cy.get('.added-manually').should('have.length', 1); // Перевірити, що залишився один елемент
    });
  });
  