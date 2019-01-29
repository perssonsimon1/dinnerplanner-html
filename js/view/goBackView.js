var GoBackView = function (container, model) {
    model.addObserver(this);
    const dinnerText = document.createElement('h3');
    dinnerText.innerHTML = "My dinner for " + model.getNumberOfGuests() + ' people';
    const button = document.createElement('button');
    button.innerHTML = "Go back and edit dinner";
    button.classList.add('float-right', 'btn', 'btn-light', 'searchView-btn');
    button.id = "go-back"
    container.append(dinnerText);
    container.append(button);
}