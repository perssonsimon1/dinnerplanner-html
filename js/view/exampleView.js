var ExampleView = function (container, model) {
	model.addObserver(this);
	var numberOfGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	numberOfGuests.html("Hello World");
}