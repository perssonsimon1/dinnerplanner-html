class DinnerOverViewController {
    constructor(gsc, view, model) {
        const element = view.querySelector('#print-full-recipie');
        element.addEventListener('click', event => {
            console.log('click');
            gsc.showScreen('DISH_PRINTOUT');
    });
    }
}