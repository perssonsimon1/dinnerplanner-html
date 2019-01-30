class DinnerOverviewController {
    constructor(gsc, view, model) {
        view.btn.addEventListener('click', event => gsc.showScreen('DINNER_PRINTOUT'));
    }
}