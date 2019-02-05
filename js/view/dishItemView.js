class DishItemView {

    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.rows = this.container.querySelector('#dishrows');
        this.render();
    }

    render(type, filter) {
        this.clear();
        console.log(type, filter, "type and filter");
        if (type == undefined) type = 'main course';
        if (filter == undefined) filter = '';
        console.log(type, filter, "type and filter");
        const loader = document.querySelector('.loader');
        loader.style.display = 'block';
        this.model.getAllDishes(type, filter).then(dishes => dishes.map(this.createItem).forEach(element => {
            this.rows.appendChild(element);
            loader.style.display = 'none';
        })).catch(error => this.showError(error));
    }

    showError(error) {
        const alert = document.querySelector('#alert');
        alert.innerHTML = 'Dishes could not be fetched, check your network connection';
        alert.style.display = 'block';
    }

    createItem(dish) {
        var div = document.createElement('div');
        div.setAttribute('dishID', dish.id);
        div.classList.add('dish-item', 'col-auto', 'col-sm-auto', 'col-lg-auto', 'text-center', 'border', 'border-dark', 'px-0', 'py-0', 'd-inline-flex-colum');
        var paragraph = document.createElement('p');
        paragraph.innerHTML = dish.title;
        var image = document.createElement('img');
        image.src = `https://spoonacular.com/recipeImages/${dish.id}-90x90.jpg`;
        image.height = 127;
        image.width = 170;
        image.classList.add('center-image');
        paragraph.classList.add('align-self-end', 'my-0');
        div.appendChild(image);
        div.appendChild(paragraph);
        return div;
    }





    clear() {
        while (this.rows.firstChild) {
            this.rows.removeChild(this.rows.firstChild);
        }
    }

    update() {
        this.clear();
        this.render();
    }


}