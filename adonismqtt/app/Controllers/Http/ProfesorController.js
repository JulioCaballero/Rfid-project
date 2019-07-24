'use strict'
const Profesor = use('App/Models/Profesor')
const { validate } = use('Validator')
const rules = {
  nombre: 'required',
  apellido_paterno: 'required',
  apellido_materno: 'required',
  telefono: 'required',
  correo: 'required',
  asignatura_id: 'required',
  matricula: 'required'
}
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with profesors
 */

const Profesor = use('App/Models/Profesor')
const { validate } = use('Validator')
const rules = {
  nombre: 'required',
  asignatura_id: 'required',
  apellido_paterno: 'required',
  apellido_materno: 'required',
  telefono: 'required',
  correo: 'required',
  matricula: 'required'
};


class ProfesorController {
  /**
   * Show a list of all profesors.
   * GET profesors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      let profesores = await Profesor.all()
      //let profesorRelaciones = profesores.asignatura()
      return response.status(200).json(profesores)
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  /**
   * Render a form to be used for creating a new profesor.
   * GET profesors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new profesor.
   * POST profesors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      return validation.messages()
    }

    let profesor = await Profesor.create(request.all())
    return response.created(profesor)
  }

  /**
   * Display a single profesor.
   * GET profesors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      let { id } = params
      let profesor = await Profesor.findOrFail(id)
      return response.status(200).json(profesor)
    } catch {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  /**
   * Render a form to update an existing profesor.
   * GET profesors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update profesor details.
   * PUT or PATCH profesors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const validation = await validate(request.all(), rules)
      let { id } = params
      let profesor = await Profesor.findOrFail(id)
      if (validation.fails()) {
        return validation.messages()
      } else {
        profesor.merge(request.all())
        await profesor.save()
        return response.status(200).json(profesor)
      }
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  /**
   * Delete a profesor with id.
   * DELETE profesors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      let { id } = params
      let profesor = await Profesor.findOrFail(id)
      if (!profesor) {
        return response.status(404).json({ message: 'No existe el profesor' })
      }
      await profesor.delete()
      return response.status(200).json({message: 'El profesor se ha eliminado con exito'})

    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }
}

module.exports = ProfesorController
