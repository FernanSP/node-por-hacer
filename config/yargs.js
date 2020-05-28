const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require('yargs')
  .command ('crear', 'Crear un elemento por hacer', {
    descripcion
  })
  .command ('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado
  })
  .command ('borrar', 'Elimina una tarea', {
    descripcion
  })
  .command ('listar', 'Lista todas las tarea', {
    descripcion,
    completado    //Filtro por estado 
  })
  .help()
  .argv;

module.exports = {
  argv
}
