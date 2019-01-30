class GeneralController {

	constructor() {
		this.views = [];
		this.screens = {};
	}

	hideAll() {
		for (var key in this.views) {
			this.hide(this.views[key]);
		}
	}

	addView(view) {
		this.views.push(view);
	}

	addScreen(name, views) {
		this.screens[name] = views;
	}

	showScreen(name) {
		this.hideAll();
		for (var key in this.screens[name]) {
			this.show(this.screens[name][key]);
		}
	}

	show(element) {
		element.classList.remove('d-none');
	}

	hide(element) {
		element.classList.add('d-none')
	}

}

window.onload = function () {

	const generalController = new GeneralController();

	//We instantiate our model
	const model = new DinnerModel();

	model.addDishToMenu(1);
	model.addDishToMenu(2);
	model.addDishToMenu(100);

	const sidebarContainer = document.querySelector("#sidebar");
	const welcomeContainer = document.querySelector("#welcomeView");
	const dishSearchContainer = document.querySelector("#dishSearchView");
	const dishItemContainer = document.querySelector("#dishItemView");
	const dinnerPrintoutContainer = document.querySelector("#dinnerPrintoutView");
	const goBackContainer = document.querySelector("#goBackView");
	const dishDetailsContainer = document.querySelector("#dishDetailsView");
	const dinnerOverContainer = document.querySelector("#dinnerOverView")

	generalController.addView(sidebarContainer);
	generalController.addView(welcomeContainer);
	generalController.addView(dishSearchContainer);
	generalController.addView(dishItemContainer);
	generalController.addView(dinnerPrintoutContainer);
	generalController.addView(goBackContainer);
	generalController.addView(dishDetailsContainer);
	generalController.addView(dinnerOverContainer);

	const sidebarView = new SidebarView(sidebarContainer, model);
	const dishSearchView = new DishSearchView(dishSearchContainer, model);
	const dishItemView = new DishItemView(dishItemContainer, model);
	const welcomeView = new WelcomeView(welcomeContainer, model);
	const dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintoutContainer, model);
	const goBackView = new GoBackView(goBackContainer, model);
	const dishDetailsView = new DishDetailsView(dishDetailsContainer, model);
	const dinnerOverView = new DinnerOverView(dinnerOverContainer, model);

	const dinnerOverViewController = new DinnerOverViewController(generalController, dinnerOverContainer, model);
	const goBackController = new GoBackController(generalController, goBackContainer, model);
	const sidebarController = new SidebarController(generalController, sidebarContainer, model);
	const welcomeController = new WelcomeController(generalController, welcomeContainer, model);

	generalController.addScreen('WELCOME', [welcomeContainer]);
	generalController.addScreen('DISH_SEARCH', [sidebarContainer, dishSearchContainer, dishItemContainer]);
	generalController.addScreen('DINNER_PRINTOUT', [dinnerPrintoutContainer, goBackContainer]);
	generalController.addScreen('DINNER_OVERVIEW', [dinnerOverContainer, goBackContainer]);
	generalController.addScreen('DISH_DETAILS', [sidebarContainer, dishDetailsContainer]);

	generalController.showScreen('WELCOME');

	const searchViewBtns = document.querySelectorAll(".searchView-btn");
	console.log(searchViewBtns)

	/*searchViewBtns.forEach(btn => {
		btn.addEventListener("click", (event) => {
			console.log(event);
			generalController.showScreen('DINNER_PRINTOUT');
		});
	});*/
}


/**
 * IMPORTANT: app.js is the only place where you are allowed to
 * query for elements in the whole document.
 * In other places you should limit the search only to the children 
 * of the specific view you're working with (see exampleView.js).
 */