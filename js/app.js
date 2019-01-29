window.onload = function () {
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


	const sidebarView = new SidebarView(sidebarContainer, model);
	const dishSearchView = new DishSearchView(dishSearchContainer, model);
	const dishItemView = new DishItemView(dishItemContainer, model);
	const welcomeView = new WelcomeView(welcomeContainer, model);
	const dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintoutContainer, model);
	const goBackView = new GoBackView(goBackContainer, model);
	const dishDetailsView = new DishDetailsView(dishDetailsContainer, model);
	const dinnerOverView = new DinnerOverView(dinnerOverContainer, model);

	// showWelcome();
	// showDishSearch();
	// showDinnerPrintout();
	// showDishDetails();
	showDinnerOver();

	function showWelcome() {
		hide(dinnerOverContainer);
		hide(sidebarContainer);
		show(welcomeContainer);
		hide(dishSearchContainer);
		hide(dishItemContainer);
		hide(goBackContainer);
		hide(dinnerPrintoutContainer);
		hide(dishDetailsContainer);
	}

	function showDishSearch() {
		console.log('Hello again')
		hide(dinnerOverContainer);
		show(sidebarContainer);
		hide(welcomeContainer);
		show(dishSearchContainer);
		show(dishItemContainer);
		hide(dinnerPrintoutContainer);
		hide(goBackContainer);
		hide(dishDetailsContainer);

	}

	function showDinnerPrintout() {
		hide(dinnerOverContainer);
		hide(sidebarContainer);
		hide(welcomeContainer);
		hide(dishSearchContainer);
		hide(dishItemContainer);
		show(dinnerPrintoutContainer);
		show(goBackContainer);
		hide(dishDetailsContainer);
	}

	function showDinnerOver() {
		hide(sidebarContainer);
		hide(welcomeContainer);
		hide(dishSearchContainer);
		hide(dishItemContainer);
		show(dinnerOverContainer);
		hide(dinnerPrintoutContainer);
		show(goBackContainer);
		hide(dishDetailsContainer);
	}

	function showDishDetails() {
		hide(dinnerOverContainer);
		show(sidebarContainer);
		hide(welcomeContainer);
		hide(dishSearchContainer);
		hide(dishItemContainer);
		show(dishDetailsContainer);
		hide(dinnerPrintoutContainer);
		hide(goBackContainer);
	}

	function show(element) {
		element.style.display == 'block'
	}

	function hide(element) {
		element.style.display = 'none'
	}

	const searchViewBtns = document.querySelectorAll(".searchView-btn");
	console.log(searchViewBtns)
	searchViewBtns.forEach(btn => {
		btn.addEventListener("click", ()=>{ 
			console.log("Hello");
			showDishSearch();
		});
	});
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};