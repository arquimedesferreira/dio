function calculaIdade(anos){

	return `Daque a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade `;

}



let pessoa1 = {
	nome : 'Fernando',
	idade: 12
}

let gato = {
	nome:'Natho',
	idade:3,
	raca:'vira lata'
}

let cachorro={
	nome:'Ferdinado',
	idade:5,
	raca:'Fila Brasileiro'
}

console.log(calculaIdade.call(gato,7));

console.log('Com o applay !')
console.log(calculaIdade.apply(gato,[7]))
