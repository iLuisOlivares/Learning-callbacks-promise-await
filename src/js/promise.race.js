
import{ promesaLenta, promesaMedia, promesaRapida} from './js/promesas'

import './styles.css';



// promesaLenta().then(promesa =>{
//console.log(promesa);
// });

// promesaMedia.then(console.log);

// promesaRapida.then(console.log);

// La primera promesa en cumplirse sera la que se ejecute
Promise.race([promesaLenta(),promesaMedia,promesaRapida]).then(console.log);
    

