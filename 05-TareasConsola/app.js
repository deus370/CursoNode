import('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquererMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklits } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
        //Establece las tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    // const tarea = new Tarea();
    
    do{
        opt = await inquererMenu();

        switch (opt) {
            case '1':
                
                const desc = await leerInput('Descripcion de la tarea:');
                tareas.crearTarea(desc);
                
                break;
            case '2':
                tareas.ListadoTareas();
                break;
            case '3':
                tareas.ListarPendientesCompletadas(true);
                break;
            case '4':
                tareas.ListarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoChecklits( tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr);
                if ( id !== '0'){
                    const ok = confirmar('¿Estas seguro?');
                    if ( ok ){
                        tareas.borrarTarea(id);
                        console.log('Tarea eliminada correctamente');
                    }
                }
                break;
        }

        guardarDB( tareas.listadoArr );
        
        // console.log(opt);

        await pausa();

    }while( opt !== '0');


}

main();