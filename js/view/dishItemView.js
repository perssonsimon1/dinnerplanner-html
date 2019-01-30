class DishItemView {

    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.rows = this.container.querySelector('#dishrows');
        this.render();
    }

    render(type,filter) {
        this.clear();
        this.model.getDishes(type,filter).map(this.createItem).forEach(element => {
            console.log(element,"Egg")
            this.rows.appendChild(element);
        });
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