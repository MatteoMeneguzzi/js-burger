//
//
//
//Create Your Burger
//
//
//

// Referenze

var btn = document.getElementById("button");
var ingredientList = document.getElementsByClassName("ingredient-checkbox");
var burgerName = document.getElementById("name");
var displayPrice = document.getElementById("price");
var coupon = document.getElementById("coupon");
var addBtn = document.getElementsByClassName("ingredient-add");

// Attivazione pulsante "Add"
for (var i = 0; i < addBtn.length; i++) {
	var add = addBtn[i];

	add.addEventListener("click", function () {
		console.log("click");
		console.log(this);
		console.log(this.previousElementSibling);
		var thisCheckbox = this.previousElementSibling;
		thisCheckbox.checked = !thisCheckbox.checked;
	});
}

// Calc Price

btn.addEventListener("click", function () {
	var name = burgerName.value.trim();
	// console.log(name);

	var price = 50;

	for (var i = 0; i < ingredientList.length; i++) {
		var ingredient = ingredientList[i];
		// console.log(ingredient);
		if (ingredient.checked) {
			price += parseInt(ingredient.value);
		} else {
		}
	}
	// console.log(price);

	// COUPON

	var couponCode = coupon.value;

	var coupons = ["AAA", "BBB", "CCC"];

	for (var i = 0; i < coupons.length; i++) {
		if (coupons[i] === couponCode) {
			price -= price * 0.2;
		} else {
		}
	}
	// if (coupons.includes(couponCode)) {
	// 	price -= price * 0.2;
	// } else {
	// 	console.log("Codice non corretto");
	// }

	// PREZZO FINALE
	displayPrice.innerHTML = price.toFixed(2);
});
