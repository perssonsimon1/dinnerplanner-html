class DishItemController {
    constructor(gsc, view, model) {


        view.querySelectorAll('.dish-item').forEach(item => item.addEventListener('click', event =>{
            model.setCurrentDish(event.target.parentElement.getAttribute('dishID'));
            console.log(event.target.parentElement.getAttribute('dishID'),"ble");
             gsc.showScreen('DISH_DETAILS');
        }
             ));
    }

}