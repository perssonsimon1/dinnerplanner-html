class GoBackView {
    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
    }

    render() {
        const dinnerText = document.createElement('h3');
        dinnerText.innerHTML = "My dinner for " + this.model.getNumberOfGuests() + ' people';
        const button = document.createElement('button');
        button.innerHTML = "Go back and edit dinner";
        button.classList.add('float-right', 'btn', 'btn-light', 'searchView-btn');
        button.id = "goBack";
        this.container.appendChild(dinnerText);
        this.container.appendChild(button);
    }

    clear() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    update() {
        this.clear();
        this.render();
    }
}