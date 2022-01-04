
// Definição padrão
function verificarPalindromo (string){
	if(!string) return "String inexitente";

	return string.split("").reverse().join("") === string;

}

//console.log(verificarPalindromo("Ovo"));

//Outra definiçao
//
function verificarPalindromo2(string){
	if(!string) return "String inexitente";
	


	for(let i = 0; i < string.length/2; i++){
		if(string[i] !== string[string.length -1-i]){
			return false;
		}
	}
	return true;
}


console.log(verificarPalindromo2("bolo"))
