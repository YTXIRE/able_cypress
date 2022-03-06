/// <reference types="@shelex/cypress-allure-plugin" />

import apiConfig from '../../../config.json';
import AUTH_DATA_ADMIN from "../../data/data.js";

describe('[API]: Авторизация', () => {
    it('Проверка успешной авторизации', () => {
        cy.allure().parentSuite('[JS][CYPRESS][API]')
        cy.allure().suite('Авторизация')
        cy.allure().startStep('Проверка авторизации').endStep()
        cy.request({
            url: `${apiConfig.apiUrl}/auth/login`,
            method: 'POST',
            body: {...AUTH_DATA_ADMIN},
        })
            .its('body')
            .should('deep.contain', {
                code: 200,
                status: "OK",
            })
    })
})