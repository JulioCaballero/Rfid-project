'use strict'
const Horario = use('App/Models/Horario');

const rules = {
  dia: 'required',
  hora_inicio: 'required',
  hora_fin: 'required',
};
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


class HorarioController {

  async index ({ request, response, view }) {
    let horario = await Horario.all();
    return response.status(200).json(horario);
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    let horario = await Horario.create(request.all(), rules);
    return response.created(horario);
  }

  async show ({ params, request, response, view }) {
    let {id} = params;
    let horario = await Horario.findOrFail(id);
    return response.ok(horario);
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    let {id} = params;
    let horario = await Horario.findOrFail(id);

    if(request._qs['type'] == 1){
      horario.merge(request.all());
    }
    horario.merge(request.all());
    await horario.save();
    return response.ok(horario);
  }

  async destroy ({ params, request, response }) {
    let {id} = params;
    let horario = await Horario.findOrFail(id);

    await horario.delete();
    return response.ok({ message : 'Recurso eliminado '});
  }
}

module.exports = HorarioController
