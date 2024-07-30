describe('Horizontal Slider', () => {
    it('should move the slider and verify its value', () => {
      cy.visit('/horizontal_slider');
      
      cy.get('input[type="range"]').invoke('val', 3).trigger('change'); // Встановити значення слайдера
      cy.get('input[type="range"]').should('have.value', '3'); // Перевірити значення слайдера
    });
  });
  