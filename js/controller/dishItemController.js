class DishItemController {
    constructor(gsc, view, model) {
        view.querySelector('.dish-item').addEventListener('click', event => gsc.showScreen('DISH_DETAILS'));
        var inputer = view.querySelector("#people").addEventListener('input', event => model.setNumberOfGuests(event.target.value));
    }

}