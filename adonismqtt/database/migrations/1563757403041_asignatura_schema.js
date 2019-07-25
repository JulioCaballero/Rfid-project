'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AsignaturaSchema extends Schema {
  up () {
    this.create('asignaturas', (table) => {
      table.increments()
      table.string('nombre', 60).notNullable()
      table.integer('horario_id').unsigned().references('id').inTable('horarios')
      table.timestamps()
    })
  }

  down () {
    this.drop('asignaturas')
  }
}

module.exports = AsignaturaSchema
