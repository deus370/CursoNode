const { leerInput, inquererMenu, pausa } = require("./helpers/inquirer");


const main = async() => {
    
    let opt;

    do {
        opt = await inquererMenu();

        if (opt !== 0 ) await pausa();
    
    } while (opt !== 0);

    console.log('terminado')

}

main();
