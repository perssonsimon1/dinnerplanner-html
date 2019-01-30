class DinnerOverView {
    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        this.render(this.container, this.model);
    }

    render(container, model) {
        var total = document.createElement('p');
        var rows = container.querySelector("#dinnerRows");
        const numberOfGuests = model.getNumberOfGuests();
        model.getFullMenu().map(item => this.createItem(item, numberOfGuests))
            .forEach(element => rows.appendChild(element));

        total.innerHTML = ' Total:' + "<br>" + model.getTotalMenuPrice() + ' SEK';
        var hallare = document.createElement('div');
        var avdelare = document.createElement('div');
        var nydiv = document.createElement('div');
        nydiv.appendChild(total);

        avdelare.classList.add('avdelare');
        nydiv.classList.add('d-flex', 'align-self-end', 'lyft');
        hallare.classList.add('row', 'col-md-1', 'col-sm-12');

        hallare.appendChild(avdelare);
        hallare.appendChild(nydiv);
        rows.appendChild(hallare);
    }

    clear() {
        const element = document.querySelector('#dinnerRows');
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    createItem(dish, numberOfGuests) {
        var outerdiv = document.createElement('div');
        var price = document.createElement('p');
        const currprice = dish.ingredients
            .map(ingr => ingr.price)
            .reduce((acc, val) => acc + val) * numberOfGuests;
        price.innerHTML = currprice + ' SEK';
        var div = document.createElement('div');
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
        price.classList.add("float-right");
        outerdiv.appendChild(div);
        outerdiv.appendChild(price);

        return outerdiv;
    }

    update(change) {
        if (change.var == 'numberOfGuests') {
            this.clear();
            this.render();
        }
    }

}