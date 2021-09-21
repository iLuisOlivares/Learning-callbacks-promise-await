
import{ buscarHeroe, buscarHeroeAsync} from './js/promesas'

import './styles.css';

buscarHeroe('spider').then(console.log);


buscarHeroeAsync('iron').then(console.log);

buscarHeroeAsync('capi').then( hero =>{

    console.log(hero);
}).catch( error => {
    console.log(error);
});



var a,b= [1, 2];
const [c,d] = b;
const [e,f] = [3,4];
const [g,h] = [b];
console.log({a});
console.log({b});
console.log({c});
console.log({d});
console.log({e});
console.log({f});
console.log({g});
console.log({h});