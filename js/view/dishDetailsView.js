class DishDetailsView {

    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        const dish = this.model.getCurrentDish();
        if (dish) this.render(dish);
    }
    
    render(dish) {
        const overviewBox = document.createElement('div');
        overviewBox.classList.add('col-sm-12', 'col-md-6', 'p-3');

        const title = document.createElement('h4');
        title.innerHTML = dish.name;

        const image = document.createElement('img');
        image.src = './images/' + dish.image;

        const desc = document.createElement('p');
        desc.innerHTML = dish.type;

        const goBackBtn = document.createElement('button');
        goBackBtn.innerHTML = "Back to search";
        goBackBtn.classList.add('btn', 'btn-light', 'searchView-btn');

        overviewBox.appendChild(title);
        overviewBox.appendChild(image);
        overviewBox.appendChild(desc);
        overviewBox.appendChild(goBackBtn);

        const ingredientsBox = document.createElement('div');
        ingredientsBox.classList.add('col-sm-12', 'col-md-6', 'ingr-table', 'p-3');

        const ingredientsTitle = document.createElement('h5');
        ingredientsTitle.innerHTML = 'Ingredients for ' + this.model.getNumberOfGuests() + ' people';

        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');
        dish.ingredients
            .map(ingr => this.ingredientsRow(ingr))
            .forEach(row => tableBody.appendChild(row));

        table.appendChild(tableBody);

        const tableFooter = document.createElement('tfoot');
        const footerRow = document.createElement('tr');
        const empt1 = document.createElement('td');
        const empt2 = document.createElement('td');
        const totalPrice = document.createElement('td');
        totalPrice.innerHTML = 'SEK ' +
            dish.ingredients
            .map(ingr => ingr.price)
            .reduce((acc, val) => acc + val) * this.model.getNumberOfGuests();

        footerRow.appendChild(empt1);
        footerRow.appendChild(empt2);
        footerRow.appendChild(totalPrice);
        tableFooter.appendChild(footerRow);
        table.appendChild(tableFooter);

        const addToMenuBtn = document.createElement('button');
        addToMenuBtn.innerHTML = 'Add to menu';
        addToMenuBtn.classList.add('btn', 'btn-light');

        ingredientsBox.appendChild(ingredientsTitle);
        ingredientsBox.appendChild(table);
        ingredientsBox.appendChild(addToMenuBtn);

        const preparationBox = document.createElement('div');
        preparationBox.classList.add('col-sm-12', 'col-md-6');

        const preparationTitle = document.createElement('h4');
        preparationTitle.innerHTML = "Preparation";
        const preparationText = document.createElement('p');
        preparationText.innerHTML = dish.description;

        preparationBox.appendChild(preparationTitle);
        preparationBox.appendChild(preparationText);


        this.container.append(overviewBox);
        this.container.append(ingredientsBox);
        this.container.append(preparationBox);
    }

    ingredientsRow(ingredient) {
        const row = document.createElement('tr');

        const amount = document.createElement('td');
        amount.innerHTML = ingredient.quantity + ' ' + ingredient.unit;
        const ingr = document.createElement('td');
        ingr.innerHTML = ingredient.name;
        const price = document.createElement('td');
        price.innerHTML = 'SEK ' + ingredient.price;

        row.appendChild(amount);
        row.appendChild(ingr);
        row.appendChild(price);

        return row;
    }

    update() {
        let newDish = this.model.getCurrentDish();
        if (newDish != null){
        this.clear();
        this.render(this.model.getCurrentDish());
        }
    }


}