'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Horario extends Model {
    asistencias() {
        return this.hasMany('App/Models/Asistencia')
    }
    asignaturas() {
        return this.hasMany('App/Models/Asignatura')
    }
}

module.exports = Horario
