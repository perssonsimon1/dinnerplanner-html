var GoBackView = function (container, model) {
    model.addObserver(this);
    const dinnerText = document.createElement('h3');
    dinnerText.innerHTML = "My dinner for " + model.getNumberOfGuests() + ' people';
    const button = document.createElement('button');
    button.innerHTML = "Go back and edit dinner";
<<<<<<< HEAD
    button.classList.add('float-right', 'btn', 'btn-light','searchView-btn');
    button.id = "goBack";
=======
    button.classList.add('float-right', 'btn', 'btn-light', 'searchView-btn');
    button.id = "go-back"
>>>>>>> 81001131d7347964e935f6194e33e4410d503049
    container.append(dinnerText);
    container.append(button);
}