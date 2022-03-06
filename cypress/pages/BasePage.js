import Selectors from '../components/selectors.js';

class BasePage {
    constructor() {}

    check_title(title) {
        cy.allure().startStep('Проверка заголовка страницы - {title}').endStep()
        cy.xpath(Selectors.h2()).should('have.text', title)
    }
}

export default BasePage;