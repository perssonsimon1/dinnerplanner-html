/** @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class SidebarView {
    constructor(container, model) {
        model.addObserver(this);
        this.model = model;
        this.container = container;

        const peopleInput = document.querySelector("#people");
        const total = document.querySelector('#total-due');

        const sidebarTable = document.querySelector('#sidebarTable');
        model.getFullMenu().map(dish => this.createTableRow(dish)).forEach(row => sidebarTable.appendChild(row));

        var numberOfGuests = this.model.getNumberOfGuests();
        peopleInput.value = numberOfGuests;
        total.innerHTML = 'Total: $' + this.model.getTotalMenuPrice();
    }

    createTableRow(dish) {
        const row = document.createElement('tr');
        const name = document.createElement('td');
        name.innerHTML = dish.name;
        const cost = document.createElement('td');
        cost.innerHTML = 'SEK ' +
            dish.ingredients
            .map(ingr => ingr.price)
            .reduce((acc, val) => acc + val) * this.model.getNumberOfGuests();

        row.appendChild(name);
        row.appendChild(cost);
        return row;
    }

}