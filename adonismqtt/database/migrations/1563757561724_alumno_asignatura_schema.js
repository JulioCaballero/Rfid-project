'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnoAsignaturaSchema extends Schema {
  up () {
    this.create('alumno_asignatura', (table) => {
      table.increments()
      table.integer('alumno_id').unsigned().references('id').inTable('alumnos').onDelete('cascade').index('id_asignatura');
      table.integer('asignatura_id').unsigned().references('id').inTable('asignaturas').onDelete('cascade').index('horario_id');
      table.timestamps()
    })
  }

  down () {
    this.drop('alumno_asignatura')
  }
}

module.exports = AlumnoAsignaturaSchema
