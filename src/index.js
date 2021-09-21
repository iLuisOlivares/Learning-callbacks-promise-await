import { obtenerHerosArr, obtenerHerosArr2, obtenerHerosArr3, obtenerHerosAwait,heroesForAwait, heroesIfAwait} from "./js/await";


console.time('await');

obtenerHerosArr().then( heroe =>{

    console.table(heroe);
    console.timeEnd('await');
} );


console.time('await1');

obtenerHerosArr3().then( heroe =>{

    console.table(heroe);
    console.timeEnd('await1');
} );


//Regresa el objeto antes de hacer la pronesa
const heroes =  obtenerHerosArr2();
//Regresa el arreglo de promesas 
const heroes2 = obtenerHerosArr();

console.log(heroes);
console.log(heroes2);

//ID valido
obtenerHerosAwait('iron').then(heroes =>{

    console.log(heroes);


}).catch(console.warn);


//ID invalido
obtenerHerosAwait('iron2').then(heroes =>{

    console.log(heroes);


}).catch(console.warn);


//for await
heroesForAwait();

//if await
heroesIfAwait('iron');

