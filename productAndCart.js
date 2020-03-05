class Cart {
    constructor (item){
    	this.item = 0;
	}
}

function addItem() {
	var element = document.getElementById("quantity");
	var item = element.options[element.selectedIndex].value;
	document.getElementById("itemQuantity").innerHTML=item;
};

function changeStrawberry(){
	document.getElementById("backpack").src="catBackpack.png"
}

function changeBlackberry(){
	document.getElementById("backpack").src="catBackpackBlack.png"
}