class GoBackView {
    constructor(container, model) {
        model.addObserver(this);
        this.container = container;
        this.model = model;
        this.btn = container.querySelector('#goBack');
    }

    render() {
        const dinnerText = this.container.querySelector('#dinnerText');
        dinnerText.innerHTML = "My dinner for " + this.model.getNumberOfGuests() + ' people';
        this.container.appendChild(dinnerText);
    }

    update() {
        this.render();
    }
}