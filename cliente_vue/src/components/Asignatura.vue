<template>
    <v-app>
        <v-app-bar app dark> 
        <v-toolbar-title class="headline text-uppercase">        
            <span class="font-weight-light">Asistencias</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>      
                ASIGNATURA           
        <v-spacer></v-spacer>
            
            <v-toolbar-items>
            <v-btn text  v-on:click="select()">Alumno</v-btn>
            <v-btn text  v-on:click="select2()"> Profesor</v-btn>
            
            </v-toolbar-items>
        </v-app-bar>
        <div class="container">
            <v-card>
                <v-card-actions>

                    <!-- Dialogo Alumno -->
                    <v-dialog v-model="dialog" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">
                            <v-btn text class="green darken-4 text-center" dark @click="abrir()">Registrar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Registro Asignatura</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field 
                                    label="Nombre*" 
                                    autofocus
                                    v-model="nombre"
                                    v-validate="'required'"
                                    required
                                    ></v-text-field>
                                </v-flex>                                
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="horarios"
                                    label="Horario*"                                    
                                    v-model="horario"
                                    required
                                    v-on:change="selectDay()"
                                    v-validate="'required'"
                                    return-object
                                    single-line
                                    ></v-select>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="horas"
                                    label="Horas"                                    
                                    v-model="hora"
                                    required
                                    v-validate="'required'"
                                    return-object
                                    single-line
                                    ></v-select>
                                </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*Campo obligatorio</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="submit" >Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <!-- Dialogo Alumno -->
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm3 d-flex>
                        <v-select
                        :items="asignaturas"
                        v-model="search"
                        label="Asignatura"
                        ></v-select>
                    </v-flex>
                    <v-btn @click="vaciar"> Mostrar todos </v-btn>
                    <v-spacer></v-spacer>

                                       
                </v-card-actions>
                <br>
                <v-data-table
                    :headers="headers"
                    :items="tabladatos"
                    :search="search"
                    :items-per-page="5"
                    class="elevation-1"
                    
                >
                <template v-slot:item.action="{ item }">
                    <v-card-actions>
                <!-- Dialogo Alumno Actualizar-->
                    <v-dialog v-model="dialog2" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">                            
                            <v-btn text class="indigo darken-4 text-center" dark @click="modificar(item.id)">Actualizar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Actualizar Asignatura</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                               <v-flex xs12 sm6 md4>
                                    <v-text-field 
                                    label="Nombre*" 
                                    autofocus
                                    v-model="nombre_db"
                                    v-validate="'required'"
                                    required
                                    ></v-text-field>
                                </v-flex>                                
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="horarios"
                                    label="Horario*"                                    
                                    v-model="horario_db"
                                    required
                                    v-validate="'required'"
                                    return-object
                                    single-line
                                    ></v-select>
                                </v-flex>                                
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog2 = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="actualizar">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <!-- Dialogo Alumno Actualizar -->

                    <v-btn text class="red accent-4 text-center" dark @click="eliminar(item.id)">Eliminar</v-btn> 
                </v-card-actions>
                </template>
                </v-data-table>
            </v-card>
        </div>
    </v-app>
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import { API } from '../Servicios/axios';

 Vue.use(VeeValidate);

  export default {
    data: () => ({
       
        nombre:"",
        hora_i:"",
        hora_f:"",
        hora_a:"",
        hora_b:"",
        id:"",
        param:0,
        f:"",
        horario_id:0,
        nombre_db:"",
        horas:[],
        hora:"",        
        horario_db:0,
        search:"",

        dialog: false,
        dialog2: false,
        tabladatos:[],
        asignaturas: [],  
        horario:[],   
        horarios:[
            
        ],
        asignatura_select:0,

        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Hora Inicio', value: 'hora_i' },
          { text: 'Hora Final', value: 'hora_f' },
           { text: 'Acciones', value: 'action', sortable: false }         
        ],
      }),
    mounted(){
        this.init()
    },
    methods: {
        select2: function() {
            this.$router.push({name:'profesor'})
        },
        select: function() {
            this.$router.push({name:'alumno'})
        },
        dias(dia){
            switch (dia) {
                case 1:
                    return "Lunes"
                    break;
                case 2:
                    return "Martes"
                    break;
                case 3:
                    return "Miercoles"
                    break;
                case 4:
                    return "Jueves"
                    break;
                case 5:
                    return "Viernes"
                    break;
            }
        },
        selectDay(){
            console.log(this.horario.array)
            this.horas=this.horario.array
        },
        init(){
            this.horarios=[]
            this.tabladatos=[]
            API.get('asignatura').then(response =>{
                console.log(response.data)
                for(var i=0; i< response.data.length;i++){
                    this.asignaturas.push(response.data[i].nombre)
                    this.f = response.data[i]
                    this.tabladatos.push({id: this.f.id, nombre: this.f.nombre, hora_i: this.f.horario.hora_inicio, hora_f: this.f.horario.hora_fin})
                }
            })
            API.get('horario').then(response =>{
                for(var i=0; i< response.data.length;i++){
                    // this.horarios.push({text: this.dias(response.data[i].dia) + " de "+response.data[i].hora_inicio +":00  -  " + response.data[i].hora_fin +":00", id: response.data[i].id})
                    this.horarios.push({id:response.data[i].dia,text: this.dias(response.data[i].dia), array:[]})
                    // this.horarios[i].array.push({text:response.data[i].hora_inicio +":00  -  " + response.data[i].hora_fin +":00",id: response.data[i].id})        
                    for(var x = 0;x<response.data.length;x++){
                        if(response.data[i].dia == response.data[x].dia){
                            this.horarios[i].array.push({text:response.data[x].hora_inicio +":00  -  " + response.data[x].hora_fin +":00",id: response.data[x].id})
                        }
                    }
                }
                // console.log(this.horarios)
            })
        },
        abrir(){
            this.dialog=true
        },
        submit(){
            API.post('asignatura',{
                nombre: this.nombre,
                horario_id: this.hora.id,
            }).then((response)=>{
                this.nombre=""
                this.horario=""
                this.dialog = false
                this.init()
            })
            
        },
        vaciar(){
            this.search = ""
        },
        modificar(id){
            this.dialog2=true
            this.param = id
            console.log(this.horarios[0])
            API.get('asignatura/' + id).then(response=> {
                console.log(response.data)
                this.nombre_db = response.data[0].nombre
            })
        },
        actualizar(){
            API.put(('asignatura/' + this.param),{
                nombre: this.nombre_db,
                horario_id: this.horario_db.id
            }).then(function (response){
                
                console.log(response);
            })
            this.init()
            this.dialog2 = false
        },
        eliminar(id){            
            API({
              method:'delete',
              url:('asignatura/'+ id),
            }).then(function (response) {
                console.log(response);
               
            })
             this.init()
        }
    }
  }
</script>