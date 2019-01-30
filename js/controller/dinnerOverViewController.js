class DinnerOverViewController {
    constructor(gsc, view, model) {
        const element = view.querySelector('#print-full-recipie');
        element.addEventListener('click', event => gsc.showScreen('DINNER_PRINTOUT'));
    }
}