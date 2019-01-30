class DinnerOverViewController {
    constructor(gsc, view, model) {
        const element = view.querySelector('#print-full-recipie');
        console.log('test', element);
        element.addEventListener('click', event => gsc.showScreen('DISH_PRINTOUT'));
    }
}