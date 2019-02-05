class DishDetailsController {
    constructor(gsc, view, model) {


        view.goBackBtn.addEventListener('click', event => gsc.showScreen('DISH_SEARCH'));
        view.addToMenuBtn.addEventListener('click', event => {
            model.getCurrentDish().then(model.addDishToMenu);
        });
    }

}