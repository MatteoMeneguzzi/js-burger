//
//
//
//Create Your Burger
//
//
//

// Referenze

var btn = document.getElementById("button");

var burgerName = document.getElementById("name");

var ingredientList = document.getElementsByClassName("ingredient-checkbox");

var displayPrice = document.getElementById("price");

// Calc Price

btn.addEventListener("click", function () {
	var name = burgerName.value.trim();

	if (name.length == 0) {
		alert("errore");
	} else {
		// PRICE CALC
		var price = 50;

		for (var i = 0; i < ingredientList.length; i++) {
			var ingredient = ingredientList[i];
			if (ingredient.checked === true) {
				price += parseInt(ingredient.value);
			} else {
			}
		}
		console.log(price);

		displayPrice.innerHTML = price.toFixed(2);
	}
});
