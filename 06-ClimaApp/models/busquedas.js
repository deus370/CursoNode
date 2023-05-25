const axios = require('axios');

class Busquedas{

    historial = [];

    constructor(){
        //Leer DB si existe
    }

    async ciudad( lugar = '' ){
        //Pticion HHTP

        try {
            
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
    
            return [];
            //Retornar las ciudades o lugares que coincidan.
        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;