const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar = false, limite = 10) => {
    try {
        let salida, consola = '';

        for(let i=1; i<=limite; i++){
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }

        if( listar ){
            console.log( salida );
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, consola);

        return `Tabla-${base}.txt Creada`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}