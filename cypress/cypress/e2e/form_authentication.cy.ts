describe('Form Authentication', () => {
    it('should login with valid credentials', () => {
      cy.visit('/login');
      
      cy.get('#username').type('tomsmith'); // Введіть ім’я користувача
      cy.get('#password').type('SuperSecretPassword!'); // Введіть пароль
      cy.get('button[type="submit"]').click(); // Натиснути кнопку входу
      
      cy.url().should('include', '/secure'); // Перевірити, що URL містить '/secure'
      cy.get('.flash.success').should('contain.text', 'You logged into a secure area!'); // Перевірити повідомлення про успішний вхід
    });
  });
  