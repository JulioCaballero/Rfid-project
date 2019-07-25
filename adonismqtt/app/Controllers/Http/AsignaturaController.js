'use strict'

const rules = {
  nombre: 'required',
};
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Asignatura = use('App/Models/Horario');
const { validate } = use('Validator');

class AsignaturaController {

  async index ({ request, response, view }) {
    let asignatura = await Asignatura.query().with('profesor').fetch();
    return response.status(200).json(asignatura);
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = AsignaturaController
