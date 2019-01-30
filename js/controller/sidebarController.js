class SidebarController {
    constructor(gsc, view, model) {
        view.querySelector('#confirmDinner').addEventListener('click', event => gsc.showScreen('DINNER_OVERVIEW'));
        view.querySelector("#people").addEventListener('input', event => model.setNumberOfGuests(event.target.value));
    }

}