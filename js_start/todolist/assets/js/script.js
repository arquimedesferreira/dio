//console.log("Inciando contador !")


var textTodo  = document.getElementById("textodo")
var listToto = []
var elementListodo= document.getElementById("listTodo")

//document.getElementById("btn-increment")

function addtodo(){
	console.log("Adicionado atividade a lista")
	console.log(textodo.value)
	//cria elemento 
	newLi(textodo.value)
	textodo.value= ""
	
	//e adiciona a lista 
	//number.innerHTML = numberInt
	//number.style.backgroundColor="lightblue"
	//console.log(number.textContent)	
}

function newLi(text){
	let newItem = document.createElement("LI");       // Create a <li> node
	let textnode = document.createTextNode(text);  // Create a text node
	newItem.appendChild(textnode);                    // Append the text to <li>

	elementListodo.insertBefore(newItem, elementListodo.childNodes[0]);

}
