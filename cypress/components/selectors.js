export class Selectors {
    h2() {
        return '//h2'
    }
    login() {
        return '//input[@type="text" and @placeholder="Логин"]'
    }
    password() {
        return '//input[@type="password" and @placeholder="Пароль"]'
    }
    auth_login_system() {
        return '//div[@class="login_text"]'
    }
}

export default new Selectors()