class GoBackController {
    constructor(gsc, view, model) {
        view.querySelector('#goBack').addEventListener('click', event => gsc.showScreen('DISH_SEARCH'));
    }
}