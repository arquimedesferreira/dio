//console.log("Inciando contador !")


var number  = document.getElementById("number")
var numberInt = 0

//document.getElementById("btn-increment")

function increment(){
	//console.log("Adicionado um número")
	numberInt += 1
	number.innerHTML = numberInt
	if(numberInt > 0){
		number.style.backgroundColor="lightblue"
	}
	//console.log(number.textContent)
}

function decrement(){
	//console.log("Decrementando o número ")
	numberInt -= 1
	number.innerHTML = numberInt
	if(numberInt < 0){
		number.style.backgroundColor = "red"
	}
	//console.log(number.textContent)
}
