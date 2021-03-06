/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var WelcomeView = function (container, model) {

    const description = "asdasdasdasdasdasdasdasdasdasdasdasdasdasd";
    const btnText = "Create new dinner"

    const topRow = document.createElement('div');
    const bottomRow = document.createElement('div');
    [topRow, bottomRow]
    .forEach(element => element.classList.add('row', 'justify-content-center'));

    const paragraph = document.createElement('p');
    paragraph.innerHTML = description;
    topRow.appendChild(paragraph);

    this.btn = document.createElement('button');
    this.btn.innerHTML = btnText;
    this.btn.classList.add('btn', 'btn-light');
    this.btn.id = 'createNewDinner';
    bottomRow.appendChild(this.btn);

    container.append(topRow);
    container.append(bottomRow);

}