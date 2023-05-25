const { leerInput, inquererMenu, pausa } = require("./helpers/inquirer");
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
                await busquedas.ciudad(lugar);

                console.log('\n Informacion de la ciudad\n');
                console.log('Ciudad:');
                console.log('Lat:');
                console.log('Lng:');
                console.log('');
                console.log('');
                console.log('');
                console.log('');

            
                break;
            case 2:
                break;
            default:
                break;
        }

        if (opt !== 0 ) await pausa();
    
    } while (opt !== 0);

    console.log('terminado')

}

main();
