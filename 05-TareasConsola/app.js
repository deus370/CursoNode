const { inquererMenu } = require('./helpers/inquirer');

import('colors');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    let opt = '';
    
    do{
        opt = await inquererMenu();
        console.log(opt);

        if( opt !== '0' ) await pausa();

    }while( opt !== '0');


}

main();