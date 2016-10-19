// Use the "converter" exercise for reference

// create variables to use for linking to html

var heightField = document.getElementById("height");
var charField = document.getElementById("character");
var submitBTN = document.getElementById("growButton");
var printedTree = "";



// makes the user input for height and character update tree keys and building the object


function getInput(){
	// console.log("getInput is running")
	var tree = {
	height: 0,
	character: 0
}
	tree.height = heightField.value.substring(0,2);//limits the characters read
	tree.character = charField.value.charAt(0);
	buildTree(tree);

};






// create event listeners for clicks and enters, also displays alert if nothing is entered

heightField.addEventListener("keyup", function(event){
	if(event.keyCode === 13) {
			if(!heightField.value || !charField.value) {
				alert("Both fields must have a value!");
			}
			else {
				getInput(); 
			}
	}
});

charField.addEventListener("keyup", function(event){
	if(event.keyCode === 13) {
		if(!charField.value || !heightField.value) {
				alert("Both fields must have a value!");

			}
			else{
				getInput();
			}
	}
});

submitBTN.addEventListener("click", function() {
	console.log("click event working?")
	if (!charField.value || !heightField.value){
		alert("Both fields must have a value!");
	}
	else {
		getInput();
	}
});

	

function buildTree(tree){
	// console.log(tree.height);
	//placeholder for the amount of spaces I need
	var spaces = tree.height;
	var charCount = 1;
	for (var i = 0; i < tree.height; i++){
		
		//spaces-- will take 1 off of each iteration, starting at the height of the tree
		spaces--;

		console.log(" ".repeat(spaces) + tree.character.repeat(charCount));
		//increases the number of characters by 2 each iteration
		charCount = charCount + 2;
	  	
	}
}




