
const heros = {
    iron:{
        nombre:'Tony',
        poder: 'dinero'
    },

    spider:{
        nombre: "Peter",
        poder: 'araña'
    },
    capi:{
        nombre: "Rogers",
        poder: 'super soldado'
    }


}

export const buscarHeroe = (id)=>{

    const hero = heros[id];

    return new Promise ((resolve,reject) =>{

        if(hero){
            setTimeout(()=>{
                resolve(hero);
            }, 1000);

        }else{
            reject(`Promesa error: No existe ese heroe con id - ${id}`);
        }

    });
}


export const buscarHeroeAsync = async(id) => {

    const hero = heros[id];
        if(hero){
            return hero;
        }else{
            throw `Promesa error: No existe ese heroe con id - ${id}`;
        }

}

const promesaLenta = ()=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Promesa Lenta');
        }, 2000);    
    });

}

const promesaMedia  = new Promise((resolve,reject) => setTimeout(() => resolve('Promesa Media'), 1500));

const promesaRapida = new Promise((resolve,reject) => setTimeout(() => resolve('Promesa Rapida'), 1000));


export{
    promesaLenta,
    promesaMedia,
    promesaRapida,
}