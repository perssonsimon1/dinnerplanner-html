class WelcomeController {
    constructor(gsc, view, model) {
        view.btn.addEventListener('click', event => gsc.showScreen('DISH_SEARCH'));
    }
}