class SidebarController {
    constructor(gsc, view, model) {
        view.confirmBtn.addEventListener('click', event => gsc.showScreen('DINNER_OVERVIEW'));
        view.peopleInput.addEventListener('input', event => model.setNumberOfGuests(event.target.value));
    }

}