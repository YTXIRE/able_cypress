import BasePage from "./BasePage.js";
import Selectors from "../components/selectors.js";

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    open() {
        cy.allure().startStep('Открытие страницы').endStep()
        cy.visit('/');
    }

    field_inputs(data) {
        cy.allure().startStep('Заполнение полей формы авторизации - {data}').endStep()
        cy.xpath(Selectors.login()).type(data.login)
        cy.xpath(Selectors.password()).type(data.password)
    }

    click_enter() {
        cy.allure().startStep('Нажатие кнопки  Enter').endStep()
        cy.xpath(Selectors.password()).type('{enter}')
    }

    check_login_user(login) {
        cy.allure().startStep('Проверка логина пользователя - {login}').endStep()
        cy.xpath(Selectors.auth_login_system()).should('have.text', login)
    }
}

export default new LoginPage();