require('dotenv').config();
const { leerInput, inquererMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {
    
    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquererMenu();
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                
                //Buscar los lugares
                const lugares = await busquedas.ciudad(lugar);
                
                //Seleccionar lugar
                const id = await listarLugares(lugares);
                if( id === '0') continue

                
                //guardar en DB
                const lugarSel = lugares.find( l => l.id === id );
                busquedas.agregarHistorial( lugarSel.nombre);
                
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng );
                console.clear();
                console.log('======================================================='.green);
                console.log('\n Informacion de la ciudad\n'.green);
                console.log('Ciudad: ',lugarSel.nombre);
                console.log('Lat: ',lugarSel.lat );
                console.log('Lng: ',lugarSel.lng);
                console.log('Temperatura: ',clima.temp);
                console.log('Minima: ',clima.min);
                console.log('Maxima: ',clima.max);
                console.log('Como esta el clima: ',clima.desc.yellow);
                console.log('======================================================='.green);
            
                break;
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${ i + 1}`.green;
                    console.log(`${ idx } ${lugar}`);
                });
                break;
            default:
                break;
        }

        if (opt !== 0 ) await pausa();
    
    } while (opt !== 0);

    
    console.log('Saliendo del sistema');

}

main();
