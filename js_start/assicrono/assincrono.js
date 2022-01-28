async function resolveAsyncPromise(){

	const myTimePromise = new Promise((resolve, reject) =>{
		windows.setTimeout(()=>{
			resolve(console.log('Resolvido !'));
		},50);	
	});

const resolved = await myTimePromise.then((result)=> result + 'passando para o then!').catch((err)=> console.log(err.message));


	return resolved;
}

console.log(resolveAsyncPromise());

//let t = 2200
//for(let i=0;i<= t; i++){
//	console.log('Contando ');
//	console.log(i);
//}
