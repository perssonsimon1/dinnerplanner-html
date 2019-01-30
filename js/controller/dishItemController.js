class DishItemController {
    constructor(gsc, view, model) {


        view.querySelectorAll('.dish-item').forEach(item => item.addEventListener('click', event =>{
            model.setCurrentDish(event.target.attributes.dishID);
            console.log(model.getCurrentDish());
             gsc.showScreen('DISH_DETAILS');
        }
             ));
    }

}