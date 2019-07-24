'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfesorSchema extends Schema {
  up () {
    this.create('profesors', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.integer('asignatura_id').unsigned().references('id').inTable('asignaturas')
      table.string('apellido_paterno', 80).notNullable()
      table.string('apellido_materno', 80).notNullable()
      table.string('telefono', 15).notNullable().unique()
      table.string('correo', 254).notNullable().unique()
      table.string('matricula', 60).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('profesors')
  }
}

module.exports = ProfesorSchema
