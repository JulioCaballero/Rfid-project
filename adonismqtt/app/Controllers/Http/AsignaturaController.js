'use strict'

const rules = {
  nombre: 'required',
  horario_id: 'required',
};
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Asignatura = use('App/Models/Asignatura');
const Horario = use('App/Models/Horario');
const { validate } = use('Validator');

class AsignaturaController {

  async index ({ request, response, view }) {
    let asignatura = await Asignatura.query().with('horario').fetch();
    return response.status(200).json(asignatura);
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    try{
      const validation = await validate(request.all(), rules)
      if (validation.fails()) {
        return validation.messages()
      }
      let asignatura = await Asignatura.create(request.all(), rules)
      return response.created(asignatura)
    }catch(error){
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
      
  }

  async show ({ params, request, response, view }) {
    try{
      let {id} = params
      let asignatura = await Asignatura.query().with('horario').where('id', '=', id).fetch()
      if (asignatura.rows == 0) {
        return response.status(404).json({data: 'Resource not found'})
    }
    return response.ok(asignatura)
    }catch(error){
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    try{
      const validation = await validate(request.all(), rules)
      let {id} = params;
      let asignatura = await Asignatura.findOrFail(id);
      if(validation.fails()){
        return validation.message()
      }else{
        asignatura.merge(request.all());
        await asignatura.save();
        return response.status(200).json(asignatura)
      }
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  async destroy ({ params, request, response }) {
    try{
      let { id } = params
      let asignatura = await Asignatura.find(id)
      if (!asignatura) {
        return response.status(404).json({data: 'Resource not found'})
      }
      await asignatura.delete()
      return response.status(200).json({ message: 'La asignatura se elimino con exito'})
    }catch(error){
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

}

module.exports = AsignaturaController
