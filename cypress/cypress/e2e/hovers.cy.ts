describe('Hovers', () => {
    it('should hover over images and display user profile', () => {
      cy.visit('/hovers');
      
      cy.get('.figure').eq(0).trigger('mouseover'); // Навести курсор на перше зображення
      cy.get('.figcaption').eq(0).should('be.visible'); // Перевірити, що профіль користувача видимий
      
      cy.get('.figure').eq(1).trigger('mouseover'); // Навести курсор на друге зображення
      cy.get('.figcaption').eq(1).should('be.visible'); // Перевірити, що профіль користувача видимий
    });
  });
  