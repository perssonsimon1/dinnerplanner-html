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
        const header = document.createElement('tr');
        header.classList.add('border');
        const header1 = document.createElement('th');
        header1.innerHTML = "Dish name"
        const header2 = document.createElement('th');
        header2.innerHTML = "Cost";
        header.appendChild(header1);
        header.appendChild(header2);
        sidebarTable.appendChild(header);
        this.model.getFullMenu().map(dish => this.createTableRow(dish)).forEach(row => sidebarTable.appendChild(row));

        var numberOfGuests = this.model.getNumberOfGuests();
        peopleInput.value = numberOfGuests;
        total.innerHTML = 'Total: $' + this.model.getTotalMenuPrice();
    }

    clear() {
        const tableSpan = this.container.querySelector('#sidebarTable');
        while (tableSpan.firstChild) {
            tableSpan.removeChild(tableSpan.firstChild);
        }
    }

    createTableRow(dish) {
        const row = document.createElement('tr');
        const name = document.createElement('td');
        name.innerHTML = dish.title;
        const cost = document.createElement('td');
        cost.innerHTML = 'SEK ' +
            dish.extendedIngredients
            .map(ingr => ingr.amount)
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