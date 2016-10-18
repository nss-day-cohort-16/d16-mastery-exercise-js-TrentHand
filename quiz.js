// Use the "converter" exercise for reference

// create variables to use for linking to html

var heightField = document.getElementById("height");
var charField = document.getElementById("character");
var submitBTN = document.getElementById("growButton");
var logPlace;

var tree = {
	height: 0,
	character: 0
}

// I need to make the user input for height and character update tree keys

tree.height = heightField;
tree.character = charField;


// create event listeners for clicks and enters

heightField.addEventListener("keyup", function(event){
	if(event.keyCode == 13) {
			if(heightField.value == "") {
				alert("Both fields must have a value!");
			}
			else {
				buildTree(height, character); 
			}
	}
});

charField.addEventListener("keyup", function(event){
	if(event.keyCode == 13) {
		if(charField.value == "") {
				alert("Both fields must have a value!");

			}
			else{
				buildTree(height, character);
			}
	}
});

submitBTN.addEventListener("click", buildTree)
	// {
	// 	if(heightField.value or charField.value == '') {
	// 		alert("Both fields must have a value");;
	// 	}
	// }
	;
// create the function to build the tree

function buildTree(){

	console.log();
}