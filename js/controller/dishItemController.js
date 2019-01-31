class DishItemController {
    constructor(gsc, view, model) {
        view.rows.addEventListener('click', event =>{
            if (event.target.parentElement.matches ('.dish-item')){
            model.setCurrentDish(event.target.parentElement.getAttribute('dishID'));
            console.log(event.target.parentElement.getAttribute('dishID'),"ble");
             gsc.showScreen('DISH_DETAILS');
            }
        });
    }
}