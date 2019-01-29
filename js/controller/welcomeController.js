class WelcomeController {
    constructor(gsc, view, model) {
        view.querySelector('#createNewDinner').addEventListener('click', event => gsc.showScreen('DISH_SEARCH'));
    }
}