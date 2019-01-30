class DishItemController {
    constructor(gsc, view, model) {


        view.querySelectorAll('.dish-item').forEach(item => item.addEventListener('click', event =>{
            model.setCurrentDish(event.target.getAttribute('dishID'));
            console.log(event.target.getAttribute('dishID'));
             gsc.showScreen('DISH_DETAILS');
        }
             ));
    }

}