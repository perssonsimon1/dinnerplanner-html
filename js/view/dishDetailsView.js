class DishDetailsView {

    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        this.loader = document.querySelector('.loader');
        this.loader.style.display = 'block';
        this.model.getCurrentDish().then(dish => {
            if (dish) this.render(dish);
            this.loader.style.display = 'none';
        }).catch(console.log);
        this.goBackBtn = document.createElement('button');
        this.addToMenuBtn = document.createElement('button');
    }



    render(dish) {
        const overviewBox = document.createElement('div');
        overviewBox.classList.add('col-sm-12', 'col-md-6', 'p-3');

        const title = document.createElement('h4');
        title.innerHTML = dish.title;

        const image = document.createElement('img');
        image.src = `https://spoonacular.com/recipeImages/${dish.id}-90x90.jpg`;

        const desc = document.createElement('p');
        desc.innerHTML = dish.vegan;

        this.goBackBtn.innerHTML = "Back to search";
        this.goBackBtn.classList.add('btn', 'btn-light');
        this.goBackBtn.id = "detailsBack"

        overviewBox.appendChild(title);
        overviewBox.appendChild(image);
        overviewBox.appendChild(desc);
        overviewBox.appendChild(this.goBackBtn);

        const ingredientsBox = document.createElement('div');
        ingredientsBox.classList.add('col-sm-12', 'col-md-6', 'ingr-table', 'p-3');

        const ingredientsTitle = document.createElement('h5');
        ingredientsTitle.innerHTML = 'Ingredients for ' + this.model.getNumberOfGuests() + ' people';

        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');
        dish.extendedIngredients
            .map(ingr => this.ingredientsRow(ingr, this.model.getNumberOfGuests()))
            .forEach(row => tableBody.appendChild(row));

        table.appendChild(tableBody);

        const tableFooter = document.createElement('tfoot');
        const footerRow = document.createElement('tr');
        const empt1 = document.createElement('td');
        const empt2 = document.createElement('td');
        const totalPrice = document.createElement('td');
        totalPrice.innerHTML = 'SEK ' +
            dish.extendedIngredients
            .map(ingr => ingr.amount)
            .reduce((acc, val) => acc + val) * this.model.getNumberOfGuests();

        footerRow.appendChild(empt1);
        footerRow.appendChild(empt2);
        footerRow.appendChild(totalPrice);
        tableFooter.appendChild(footerRow);
        table.appendChild(tableFooter);

        this.addToMenuBtn.innerHTML = 'Add to menu';
        this.addToMenuBtn.classList.add('btn', 'btn-light');
        this.addToMenuBtn.id = "addToMenu"

        ingredientsBox.appendChild(ingredientsTitle);
        ingredientsBox.appendChild(table);
        ingredientsBox.appendChild(this.addToMenuBtn);

        const preparationBox = document.createElement('div');
        preparationBox.classList.add('col-sm-12', 'col-md-6');

        const preparationTitle = document.createElement('h4');
        preparationTitle.innerHTML = "Preparation";
        const preparationText = document.createElement('p');
        preparationText.innerHTML = dish.description;

        preparationBox.appendChild(preparationTitle);
        preparationBox.appendChild(preparationText);

        this.container.appendChild(overviewBox);
        this.container.appendChild(ingredientsBox);
        this.container.appendChild(preparationBox);

    }

    clear() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    ingredientsRow(ingredient, numberOfGuests) {
        const row = document.createElement('tr');

        const amount = document.createElement('td');
        amount.innerHTML = Number(ingredient.amount).toFixed(2);
        const ingr = document.createElement('td');
        ingr.innerHTML = ingredient.name;
        const price = document.createElement('td');
        price.innerHTML = 'SEK ' + Number(ingredient.amount * numberOfGuests).toFixed(2);

        row.appendChild(amount);
        row.appendChild(ingr);
        row.appendChild(price);

        return row;
    }

    update() {
        this.clear();
        this.model.getCurrentDish().then(dish => {
            if (dish) this.render(dish);
        }).catch(console.log);
    }


}