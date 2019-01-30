class DishSearchController {
    constructor(gsc, view,otherView, model) {


        view.searchBtn.addEventListener('click', event => {
        //console.log(view.optionsMenu.selectedOptions,view.filterInput.value);
        otherView.render(view.optionsMenu.selectedOptions[0].value,view.filterInput.value);
                }        );

    }

}