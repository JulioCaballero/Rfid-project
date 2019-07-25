'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.resource('profesor', 'ProfesorController');
    Route.get('alumnos/:id', 'AlumnoController.getAlumnos')
    // Route.get('profesor','ProfesorController.index')
    // Route.put('profesor/:id','ProfesorController.update')
    // Route.post('profesor','ProfesorController.store')
    // Route.delete('profesor/:id','ProfesorController.destroy')
    Route.resource('horario', 'HorarioController')
    Route.resource('alumno', 'AlumnoController')
    Route.resource('asignatura', 'AsignaturaController')
    Route.resource('asistencia', 'AsistenciaController')
}).prefix('api');

