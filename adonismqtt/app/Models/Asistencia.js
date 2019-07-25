'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asistencia extends Model {
    horario() {
        return this.belongsTo('App/Models/Horario')
    }
    alumno() {
        return this.belongsTo('App/Models/Alumno')
    }

}

module.exports = Asistencia
