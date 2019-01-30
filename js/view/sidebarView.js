/** @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class SidebarView {
    constructor(container, model) {
        model.addObserver(this);
        this.model = model;
        this.container = container;
        this.render();
        this.confirmBtn = container.querySelector('#confirmDinner');
        this.peopleInput = container.querySelector("#people");
    }

    render() {
        const peopleInput = this.container.querySelector("#people");
        const total = this.container.querySelector('#total-due');

        const sidebarTable = document.querySelector('#sidebarTable');
        this.model.getFullMenu().map(dish => this.createTableRow(dish)).forEach(row => sidebarTable.appendChild(row));

        var numberOfGuests = this.model.getNumberOfGuests();
        peopleInput.value = numberOfGuests;
        total.innerHTML = 'Total: $' + this.model.getTotalMenuPrice();
    }

    clear() {
        const table = this.container.querySelector('#sidebarTable');
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
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

    update() {
        this.clear();
        this.render();
    }

}