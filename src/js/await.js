import { buscarHeroe, buscarHeroeAsync } from "./promesas";



    const heroesId = ['capi','iron','spider'];
    const heroesPromesas = heroesId.map(buscarHeroe);

    //Forma correcta se devuelve la promesa     
    export const obtenerHerosArr = async() =>{

        const herosArray = [];

        for(const id of heroesId){

            // const hero = await buscarHeroeAsync(id);
            // herosArray.push(hero);

            herosArray.push(await buscarHeroeAsync(id));
        }

        return herosArray

    }

    //Manera minimizada
    export const obtenerHerosArr3 = async() =>{

        return await Promise.all( heroesId.map( heroes => buscarHeroe(heroes)));
    }


    //Manera incorrecta , no se debe devolver el objeto porque recuerda que las promesas
    //Ocurren despues de correr el script
    export const obtenerHerosArr2 = () =>{

        const herosArray = [];

        for(const id of heroesId){

            buscarHeroeAsync(id).then( heroes => herosArray.push(heroes));
        
        }

        return herosArray;

    }

    //devuelve el objeto no la promesa pero cuando ocurra la promesa no antes y si hay error no daña el programa
    export const obtenerHerosAwait = async(id) =>{

        try {
            const heros = await buscarHeroeAsync(id);
            return heros 
            
        } catch (error) {
            return{
                nombre:'no name',
                poder: 'no power'
            }            
            // throw error - devuelve el error de la funcion original ya que de ahi proviene el error 
        }
    }


    //for con await

    export const heroesForAwait = async() => {

        for await(const iterator of heroesPromesas) {
            console.log(iterator);
        }

            // const heroes =  await Promise.all(heroesPromesas);
            // heroes.forEach (heroe => console.log(heroe));
    }

    //for con if

    export const heroesIfAwait = async(id) =>{

        if( (await buscarHeroeAsync(id)).nombre === 'Tony'){
            console.log("iron man es correcto es el mejor");
        }else{
            console.log("no es correcto no es iron man ");
        }



    }