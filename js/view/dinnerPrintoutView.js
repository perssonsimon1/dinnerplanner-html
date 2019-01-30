class DinnerPrintoutView {

    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        this.render();
    }

    render() {
        console.log('Rerendering...')
        this.model.getFullMenu().map(this.createPrintout).forEach(element => this.container.appendChild(element));
    }

    clear() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    createPrintout(dish) {
        const box = document.createElement('div');
        box.classList.add('media');


        const imageBox = document.createElement('div');
        const image = document.createElement('img');
        image.src = './images/' + dish.image;
        imageBox.classList.add('media-left');
        imageBox.classList.add('printout-image');
        imageBox.appendChild(image);

        const dishBoxCss = ['media-body'];
        const dishBox = document.createElement('div');
        dishBoxCss.forEach(css => dishBox.classList.add(css));
        const title = document.createElement('h4');
        title.classList.add('media-heading');
        title.innerHTML = dish.name;
        const description = document.createElement('p');
        description.innerHTML = dish.description;
        dishBox.appendChild(title);
        dishBox.appendChild(description);

        const preparationBox = document.createElement('div');
        preparationBox.classList.add('media-right');
        const titlePrep = document.createElement('h4');
        titlePrep.classList.add('media-heading');
        titlePrep.innerHTML = 'Preparation';
        const preparation = document.createElement('p');
        preparation.innerHTML = dish.type;
        preparationBox.appendChild(titlePrep);
        preparationBox.appendChild(preparation);

        box.append(imageBox);
        box.append(dishBox);
        box.append(preparationBox);
        return box;
    }

    update() {
        this.clear();
        this.render(this.container, this.model);
    }

}