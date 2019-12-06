'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Asistencia = use('App/Models/Asistencia');
const Alumno = use('App/Models/Alumno');
const Asignatura = use('App/Models/Asignatura');
const Horario = use('App/Models/Horario');
const { validate } = use('Validator');
const rules = {
  rfid: 'required',
};
/**
 * Resourceful controller for interacting with asistencias
 */
class AsistenciaController {
  /**
   * Show a list of all asistencias.
   * GET asistencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new asistencia.
   * GET asistencias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {

  }

  /**
   * Create/save a new asistencia.
   * POST asistencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const validation = await validate(request.all(), rules)
      const { rfid } = request.all();
      const now = new Date();
      const dia = now.getDate();
      const dia2 = now.getDay();
      // const dia = 1;
      const mes = now.getMonth() + 1;
      const anio = now.getFullYear();
      const hora = now.getHours();
      // const hora = 1;
      const minutos = now.getMinutes();
      const fecha_actual = anio + '-' + mes + '-' + dia + ' ' + hora + ':' + minutos;
      console.log("Date:"+dia)
      console.log("Date:"+dia2)
      if (validation.fails()) {
        return validation.messages()
      }
      let alumno = await Alumno.query().with('asignaturas').where('rfid', '=', rfid).fetch()
      // console.log(alumno);

      if (alumno.rows != 0) {
        let asistencia;
        let auth = false;
        let horario = await Horario.query().where('dia', '=', dia).andWhere('hora_inicio', '<=', hora)
          .andWhere('hora_fin', '>', hora).fetch()

        // console.log(horario.toJSON()[0].id) 

        if (horario.rows == 0) {
          return response.status(404).json({ data: 'No cuenta con ninguna asignatura en estos momentos' })
        }

        let asignatura = await Asignatura.query().where('horario_id', '=', horario.toJSON()[0].id).fetch()

        //console.log(asignatura.toJSON()) 

        //  console.log(alumno.toJSON()[0].asignaturas) 

        let asignaturas = alumno.toJSON()[0].asignaturas


        asignaturas.forEach(element => {
          //console.log(element.id)
          //console.log(asignatura.toJSON()[0].id)
          if (element.id == asignatura.toJSON()[0].id) {
            auth = true;
          }
        });


        if (auth == false) {
          return response.status(404).json({data: 'No cuenta con ninguna asignatura en estos momentos'})
        }

        asistencia = await Asistencia.query().where('alumno_id','=',alumno.toJSON()[0].id).andWhere('horario_id',horario.toJSON()[0].id).fetch() 
        // console.log(asistencia)
        if (asistencia.rows != 0) {
          return response.status(404).json({ data: 'Ya cuenta con asistencia' })
        }


        const asistencia_result = await Asistencia.create({
          alumno_id: alumno.toJSON()[0].id,
          horario_id: horario.toJSON()[0].id,  
          fecha: fecha_actual
        })
        //socket.emit('asistencia', 'ok')
        return response.status(200).json(asistencia_result)
      } else {
        // socket.emit('rfid', rfids)
        return response.status(404).json({ data: 'El alumno o rfid no existe' })
      }
    } catch (error) {
      return response.status(404).json({ message: 'Se produjo un error', error })
    }


  }

  /**
   * Display a single asistencia.
   * GET asistencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing asistencia.
   * GET asistencias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update asistencia details.
   * PUT or PATCH asistencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a asistencia with id.
   * DELETE asistencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }

  async asistencias({ params, request, response }) {
    const {id} = params

    let alumno = await Alumno.query().with('asistencias.horario').with('asignaturas.horario').where('id','=',id).fetch()
    let asistencias_horario = alumno.toJSON()[0].asistencias
 //   let asignaturas_horario = alumno.toJSON()[0].asistencias.
    return asistencias_horario.horario().fetch();
  }
}

module.exports = AsistenciaController
