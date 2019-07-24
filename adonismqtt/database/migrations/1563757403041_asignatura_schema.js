'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AsignaturaSchema extends Schema {
  up () {
    this.create('asignatura', (table) => {
      table.increments()
      table.string('nombre', 60).notNullable()
      table.integer('horario_id').unsigned().references('id').inTable('horario')
      table.timestamps()
    })
  }

  down () {
    this.drop('asignatura')
  }
}

module.exports = AsignaturaSchema
