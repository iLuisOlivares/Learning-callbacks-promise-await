import { buscarHeroe as buscarHeroe_call } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const nombre = 'luis!!';



const id1 = 'spider';
const id2 = 'iron';
const id3 = 'iron2';
const id4 = 'capi';
const id5 = 'capi2';

//Callback
buscarHeroe_call(id2, (err, heroObjeto)=>{

    if(err){
        console.log(err,heroObjeto);
    }else{console.log(heroObjeto.nombre);}



});

buscarHeroe_call(id3, (err, heroObjeto)=>{

    if(err){
        console.log(err,heroObjeto);
    }else{console.log(heroObjeto);}



});

//Callbacks anidados
buscarHeroe_call(id2, (err, heroObjeto1)=>{

    if(err){
        console.log(err,heroObjeto1);
    }else{
        buscarHeroe_call(id1, (err, heroObjeto2)=>{

            if(err){
                console.log(err,heroObjeto2);
            }else{console.log(`los heroes son  ${heroObjeto2.nombre} y ${heroObjeto1.nombre}`);}
        
        });
    }

});


//Promesas
buscarHeroe(id1).then(heroe => {

    console.log(`El heroe se llama ${heroe.nombre}`);
});


buscarHeroe(id3).then(heroe => {

    console.log(`El heroe2 se llama  ${heroe.nombre}`);
}).catch( error =>{

    console.log(error);

});

//Promesas anidadas

buscarHeroe(id1).then(heroO1 =>{
    buscarHeroe(id2).then(heroO2 =>{

        console.log(`los heroe se llaman  ${heroO1.nombre} y ${heroO2.nombre}`);

    });

});

//Promesas all 
//Si alguna promesa falla no proseguira el codigo
Promise.all([buscarHeroe(id1), buscarHeroe(id2), buscarHeroe(id4)]).then( ([hero1,hero2,hero3]) =>{

    console.log(`Los heores son ${hero1.nombre}, ${hero2.nombre}  y ${hero3.nombre  }`);

}).catch( (error) => {
    //catch nos muestra el error
    alert(error);
    console.log(error);

}).finally( () =>{
    //Finaly ocurre si todo esta bien dentro de la promesa
    console.log('Finalizo la promesa ');
});

console.log('fin del programa, solo ocurre la promesa cuando finaliza de leer linea por linea');