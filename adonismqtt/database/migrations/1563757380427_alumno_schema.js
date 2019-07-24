'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnoSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('rfid',80).notNullable().unique()
      table.string('correo', 254).notNullable().unique()
      table.string('matricula', 60).notNullable().unique()
      table.string('telefono', 15).notNullable().unique()
      table.string('apellido_paterno', 80).notNullable()
      table.string('apellido_materno', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnoSchema
