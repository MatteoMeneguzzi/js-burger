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
var coupons = ["AAA", "BBB", "CCC"];
var addBtn = document.getElementsByClassName("ingredient-add");

// Attivazione pulsante "Add"

for (var i = 0; i < addBtn.length; i++) {
	var add = addBtn[i];
	add.addEventListener("click", function () {
		console.log("Click!");
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

	var couponCode = coupon.value;

	// if (coupons.includes(couponCode)) {
	// 	console.log("Codice corretto");
	// } else {
	// 	console.log("Codice non corretto");
	// }

	for (var i = 0; i < coupons.length; i++) {
		if (couponCode === coupons[i]) {
			price -= price * 0.2;
		} else {
		}
	}

	// PREZZO FINALE
	displayPrice.innerHTML = price.toFixed(2);
});

// var coupons = ["AAA", "BBB", "CCC"];

// var randomCoupon = "BBB";

// var found = false;

// for (var i = 0; i < coupons.length; i++) {
// 	if (coupons[i] === randomCoupon) {
// 		console.log("Corretto");
// 	} else {
// 		console.log("Sbagliato");
// 	}
// }
