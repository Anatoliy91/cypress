describe('Inputs', () => {
    it('should type into input field and verify the value', () => {
      cy.visit('/inputs');
      
      cy.get('input[type="number"]').type('123').should('have.value', '123'); // Ввести значення в поле вводу і перевірити його
    });
  });
  