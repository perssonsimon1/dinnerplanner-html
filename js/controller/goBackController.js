class GoBackController {
    constructor(gsc, view, model) {
        view.querySelector('#go-back').addEventListener('click', event => gsc.showScreen('DISH_SEARCH'));
    }
}