class DishSearchController {
    constructor(gsc, view,otherView, model) {


        view.searchBtn.addEventListener('click', event => 
        otherView.render(view.optionsMenu.slectedOptions.value,view.filterInput.value)
        );

    }

}