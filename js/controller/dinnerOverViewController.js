class DinnerOverViewController {
    constructor(gsc, view, model) {
        view.querySelector('#print').addEventListener('click', event => gsc.showScreen('WELCOME'));
    }
}