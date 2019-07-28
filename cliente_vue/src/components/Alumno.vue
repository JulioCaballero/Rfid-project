<template>
    <v-app>
        <v-app-bar app dark> 
        <v-toolbar-title class="headline text-uppercase"> 
            <div v-on:click="select4()">
            <span class="font-weight-light">Asistencias</span>
            </div>      
            
        </v-toolbar-title>
        <v-spacer></v-spacer>      
                ALUMNO           
        <v-spacer></v-spacer>
            
            <v-toolbar-items>
            <v-btn text  v-on:click="select3()">Asignatura</v-btn>
            <v-btn text  v-on:click="select2()"> Profesor</v-btn>
            
            </v-toolbar-items>
        </v-app-bar>
        <div class="container">
            <v-card>
                <v-card-actions>

                    <!-- Dialogo Alumno -->
                    <v-dialog v-model="dialog" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">
                            <v-btn text class="green darken-4 text-center" dark v-on="on">Registrar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Registro Alumno</span>
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
                                <v-flex xs12 sm6 md4>
                                    <v-text-field 
                                    label="Apellido Paterno*" 
                                    v-model="apellido_p"
                                    v-validate="'required'"
                                    required>
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field
                                    label="Apellido Materno*"    
                                    v-model="apellido_m" 
                                    v-validate="'required'"                        
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Email*"
                                    v-model="email"
                                    type="email"
                                    v-validate="'required'" 
                                    required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Telefono*" 
                                    v-model="telefono"
                                    v-validate="'required'"
                                    required                                    
                                    @keypress="isNumber($event)"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Matricula*" 
                                    v-model="matricula"
                                    v-validate="'required'"
                                    required                                    
                                    @keypress="isNumber($event)"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="RFID*" 
                                    v-model="rfid"
                                    v-validate="'required'"
                                    required
                                    disabled
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="materias"
                                    label="Asignaturas*"
                                    item-text="nombre"
                                    item-value="id"
                                    multiple
                                    v-model="asignatura"
                                    required
                                    v-validate="'required'"
                                    ></v-select>
                                </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
                            <v-btn color="blue darken-1" text @click="submit">Guardar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <v-spacer></v-spacer>
                    <!-- Dialogo Alumno -->

                    <v-flex xs12 sm3 d-flex>
                        <v-select
                        :items="alumnos"
                        item-text="nombre"
                        item-value="id"
                        label="Alumno"
                        v-model="alumno_select"
                        ></v-select>
                    </v-flex>
                    <v-btn @click="getAlumno" > Seleccionar</v-btn>
                    <v-spacer></v-spacer>

                    <!-- Dialogo Alumno Actualizar-->
                    <v-dialog v-model="dialog2" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">                            
                            <v-btn text class="indigo darken-4 text-center" dark v-on="on">Actualizar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Actualizar Alumno</span>
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
                                <v-flex xs12 sm6 md4>
                                    <v-text-field 
                                    label="Apellido Paterno*" 
                                    v-model="apellido_p_db"
                                    v-validate="'required'"
                                    required>
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field
                                    label="Apellido Materno*"    
                                    v-model="apellido_m_db" 
                                    v-validate="'required'"                        
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Email*"
                                    v-model="email_db"
                                    
                                    v-validate="'required'" 
                                    required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Telefono*" 
                                    v-model="telefono_db"
                                    v-validate="'required'"
                                    required
                                    @keypress="isNumber($event)"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Matricula*" 
                                    v-model="matricula_db"
                                    v-validate="'required'"
                                    required
                                    @keypress="isNumber($event)"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="RFID*" 
                                    v-model="rfid_db"                                  
                                    disabled
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="materias"
                                    item-text="nombre"
                                    item-value="id"
                                    label="Asignaturas*"
                                    multiple
                                    v-model="asignatura_db"
                                    required
                                    v-validate="'required'"
                                    ></v-select>
                                </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog2 = false">Cerrar</v-btn>
                            <v-btn color="blue darken-1" text @click="actualizar">Actualizar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <!-- Dialogo Alumno Actualizar -->


                    
                    
                    <v-btn text class="red accent-4 text-center" dark @click="eliminar">Eliminar</v-btn>                    
                </v-card-actions>
                <br>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table>
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
    data () {
      return {
          $_veeValidate: {
        validator: 'new'
        },

        nombre:"",
        apellido_p:"",
        apellido_m:"",
        email:"",
        telefono:"",
        matricula:"",
        rfid:"asdasd123",
        asignatura:[],

        alumnos:[],
        id_alumno:[],
        alumno_select:0,

        nombre_db:"",
        apellido_p_db:"",
        apellido_m_db:"",
        email_db:"",
        telefono_db:"",
        matricula_db:"",
        rfid_db:"",
        asignatura_db:[],


        dialog: false,
        dialog2: false,

        //alumnos: ['Foo', 'Bar', 'Fizz', 'Buzz'],

        materias:[],

        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'RFID', value: 'RFID' },
          { text: 'Asignatura', value: 'asignatura' },
          { text: 'Fecha', value: 'protein' },
          { text: 'Email', value: 'fecha' },
          { text: 'Telefono', value: 'iron' },
          { text: 'Asistencia', value: 'iron' },
        ],
        desserts: [],
      }
    },
     created(){
        this.getAlumnos()
        this.getAsignaturas()
    },
    methods: {
        select2: function() {
            this.$router.push({name:'profesor'})
        },
        select3: function() {
            this.$router.push({name:'asignatura'})
        },
        select4: function() {
            this.$router.push({name:'home'})
        },

        submit () {        
        this.$validator.validateAll().then(valid =>{
            if(valid){
                API({
                    method: 'post',
                    url: 'alumno/',
                    data: {
                        nombre: this.nombre,  
                        apellido_paterno: this.apellido_p,
                        apellido_materno: this.apellido_m,
                        rfid:this.rfid,
                        correo:this.email, 
                        matricula: this.matricula,
                        telefono:this.telefono, 
                        asignaturas:this.asignatura  
                    }
                });                
                this.dialog = false;                
                this.clean();                        
            }            
        })
        },
        actualizar () {                    
            this.$validator.validateAll().then(valid =>{
                if(valid){
                    API.put(('alumno/' + this.alumno_select),{
                        nombre: this.nombre_db,  
                        apellido_paterno: this.apellido_p_db,
                        apellido_materno: this.apellido_m_db,
                        correo: this.email_db, 
                        matricula: this.matricula_db,
                        telefono:this.telefono_db

                    })                                                          
                    this.dialog2 = false;               
                    this.$validator.reset()                        
                }            
            })
        },
        eliminar(){
            API({
              method:'delete',
              url:('alumno/' + this.alumno_select),
            }).then(function (response) {
                console.log(response);
            })
        },
        clean(){
            this.nombre="",
            this.apellido_p="",
            this.apellido_m="",
            this.rfid="",
            this.email = "",            
            this.matricula = "",
            this.telefono ="",
            this.$validator.reset()          
        },
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },

        getAlumnos(){
            API.get('alumno')
            .then((response)=>{                
                this.alumnos = response.data                  
            })            
        },

        getAsignaturas(){
            API.get('asignatura')
            .then((response)=>{                
                this.materias = response.data                  
            })            
        },

        getAlumno(){
            
            API.get('alumno/' + this.alumno_select)
            .then((response)=>{                              
                this.nombre_db = response.data[0].nombre ,
                this.apellido_p_db= response.data[0].apellido_paterno ,
                this.apellido_m_db= response.data[0].apellido_materno ,
                this.email_db= response.data[0].correo ,
                this.telefono_db= response.data[0].telefono ,
                this.matricula_db= response.data[0].matricula ,
                this.rfid_db= response.data[0].rfid 

            })            
        },

        getAsistencias(){
            API.get('asistencias/' + this.alumno_select)
            .then((response)=>{                
                this.desserts = response.data                  
            })   
        },

    }
  }
</script>