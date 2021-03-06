'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AsistenciaSchema extends Schema {
  up () {
    this.create('asistencias', (table) => {
      table.increments()
      table.integer('alumno_id').unsigned().references('id').inTable('alumnos')
      table.integer('horario_id').unsigned().references('id').inTable('horarios')
      table.date('fecha', 60).notNullable()
      table.timestamps()
    })
  }
  
  down () {
    this.drop('asistencias')
  }
}

module.exports = AsistenciaSchema
