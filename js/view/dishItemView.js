class DishItemView {

    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        var rows = container.querySelector("#dishrows");
        this.model.getDishes().map(this.createItem).forEach(element => rows.appendChild(element));
    }

    clear() {

    }

    createItem(dish) {
        var div = document.createElement('div');
        ['dish-item', 'col-auto', 'col-sm-auto', 'col-lg-auto', 'text-center', 'border', 'border-dark', 'px-0', 'py-0', 'd-inline-flex-colum'].forEach(cssClass => div.classList.add(cssClass));
        var paragraph = document.createElement('p');
        paragraph.innerHTML = dish.name;
        var image = document.createElement('img');
        image.src = './images/' + dish.image;
        image.height = 127;
        image.width = 170;
        image.classList.add('center-image');
        ['align-self-end', 'my-0'].forEach(cssClass => paragraph.classList.add(cssClass));
        div.appendChild(image);
        div.appendChild(paragraph);
        return div;
    }

    update() {}


}