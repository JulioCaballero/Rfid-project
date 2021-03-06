'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HorarioSchema extends Schema {
  up () {
    this.create('horarios', (table) => {
      table.increments()
      table.integer('hora_inicio', 10).notNullable()
      table.integer('hora_fin', 10).notNullable()
      table.integer('dia', 10).notNullable()
      table.timestamps()
    })
  }
  
  down () {
    this.drop('horarios')
  }
}

module.exports = HorarioSchema
