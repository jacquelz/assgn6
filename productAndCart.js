class Cart {
    constructor (item){
    	this.item = 0;
	}
}

//add to cart
function addItem() {
	//cart quantity
	var element = document.getElementById("quantity");
	var item = element.options[element.selectedIndex].value;
	document.getElementById("itemQuantity").innerHTML=item;
	//display item in cart
	var b = document.getElementById("displayBackpack");
	if (b.style.display === "none") {
		b.style.display = "block";
	} else {
		b.style.display = "none";
	}
}

//remove cart item
function remove() {
	var b = document.getElementById("displayBackpack");
	b.style.display = "none";
}

//change product detail
function changeStrawberry(){
	document.getElementById("backpack").src="catBackpack.png"
}

//change product detail
function changeBlackberry(){
	document.getElementById("backpack").src="catBackpackBlack.png"
}

//add to wishlist
function addItemWishlist() {
	//wishlist quantity
	document.getElementById("wishlistItem").innerHTML=1;
	//display item in wishlist
	var b = document.getElementById("catHarness");
	if (b.style.display === "none") {
		b.style.display = "block";
	} else {
		b.style.display = "none";
	}
}

//carousel buttons
var index = 1;
show(index);
function plus(n) {
	show(slide += n);
}

function show(n) {
	var i;
	var x = document.getElementByClassName("slides");
	if (n > x.length) {
		index = 1
	}
	if (n < 1) {
		index = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[index-1].style.display = "block";
}