'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnoAsignaturaSchema extends Schema {
  up () {
    this.create('alumno_asignaturas', (table) => {
      table.increments()
      table.integer('alumno_id').unsigned().references('id').inTable('alumno')
      table.integer('asignatura_id').unsigned().references('id').inTable('asignatura')
      table.timestamps()
    })
  }

  down () {
    this.drop('alumno_asignaturas')
  }
}

module.exports = AlumnoAsignaturaSchema
