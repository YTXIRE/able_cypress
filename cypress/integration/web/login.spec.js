/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

import LoginPage from "../../pages/LoginPage.js";
import AUTH_DATA_ADMIN from "../../data/data.js";

describe('[UI]: Авторизация', () => {
    it('Проверка успешной авторизации', () => {
        cy.allure().parentSuite('[JS][CYPRESS][UI]')
        cy.allure().suite('Авторизация')
        const login_page = LoginPage;
        login_page.open()
        login_page.check_title('Авторизация')
        login_page.field_inputs({...AUTH_DATA_ADMIN})
        login_page.click_enter()
        login_page.check_login_user(AUTH_DATA_ADMIN.login)
    })
})
