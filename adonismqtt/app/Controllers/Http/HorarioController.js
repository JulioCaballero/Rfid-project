'use strict'

const rules = {
  dia: 'required',
  hora_inicio: 'required',
  hora_fin: 'required',
};
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Horario = use('App/Models/Horario');
const { validate } = use('Validator')

class HorarioController {

  async index ({ request, response, view }) {
    try{
      let horario = await Horario.all();
      return response.status(200).json(horario);
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
    
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const validation = await validate(request.all(), rules)
    const {hora_inicio,hora_fin,dia} = request.all() 
    let horario = Horario.query().where('hora_inico',hora_inicio).andWhere('hora_fin',hora_fin).andWhere('dia',dia).fetch()
    if(horario.rows !=0){
      if(validation.fails()) {
        return validation.message()
      }
      let horario = await Horario.create(request.all(), rules);
      return response.created(horario);
    }
   
    return horario;
  }

  async show ({ params, request, response, view }) {
    try{
      let {id} = params;
      let horario = await Horario.findOrFail(id);
      return response.ok(horario);
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    try{
      const validation = await validate(request.all(), rules)
      let {id} = params;
      let horario = await Horario.findOrFail(id);
      if(validation.fails()){
        return validation.message()
      }else{
        horario.merge(request.all());
        await horario.save();
        return response.status(200).json(horario)
      }
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }
  }

  async destroy ({ params, request, response }) {
    try{
      let {id} = params;
      let horario = await Horario.findOrFail(id);
      if(!horario){
        return response.status(404).json({ message: "no existe el horario"})
      }
      await horario.delete();
      return response.ok({ message : 'Recurso eliminado '});
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error})
    }    
  }
}

module.exports = HorarioController
