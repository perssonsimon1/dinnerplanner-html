class DishItemView {

    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        this.render();
    }

    render() {
        var rows = this.container.querySelector('#dishrows');
        this.model.getDishes().map(this.createItem).forEach(element => rows.appendChild(element));
    }

    clear() {
        const rowContainer = this.container.querySelector('#dishrows');
        while (rowContainer.firstChild) {
            rowContainer.removeChild(rowContainer.firstChild);
        }
    }

    createItem(dish) {
        var div = document.createElement('div');
        div.setAttribute('dishID', dish.id);
        div.classList.add('dish-item', 'col-auto', 'col-sm-auto', 'col-lg-auto', 'text-center', 'border', 'border-dark', 'px-0', 'py-0', 'd-inline-flex-colum');
        var paragraph = document.createElement('p');
        paragraph.innerHTML = dish.name;
        var image = document.createElement('img');
        image.src = './images/' + dish.image;
        image.height = 127;
        image.width = 170;
        image.classList.add('center-image');
        paragraph.classList.add('align-self-end', 'my-0');
        div.appendChild(image);
        div.appendChild(paragraph);
        return div;
    }

    update() {
        this.clear();
        this.render();
    }


}