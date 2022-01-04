
// Função 01

function substituiPares(array){
	for(let i=0; i < array.length; i++){
		if(array[i] === 0){
			console.log("O valor ja é Zero !")
		}else if( array[i] % 2 ===0){
			console.log(`Subistituindo o Array ${array[i]} por 0 `)
			array[i] = 0
		}

	}
	return array;
}


let arr = [1,3,4,5,80,33,23,90];

console.log(substituiPares(arr));

