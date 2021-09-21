

const heros = {
    iron:{
        nombre:'Tony'
    },

    spider:{
        nombre: "Peter"
    },
    capi:{
        nombre: "Rogers"
    }


}


export const buscarHeroe = (id, callback) => {

    const hero = heros[id];

    if(hero){
        callback(null,hero);
    }else{
        //Si hay un error
        callback( `No existe ese heroe - ${id}`);
    }
  

}