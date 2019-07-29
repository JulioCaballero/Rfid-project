<template>
    <v-app>
        <v-app-bar app dark> 
        <v-toolbar-title class="headline text-uppercase">        
           <div v-on:click="select4()">
            <span class="font-weight-light">Asistencias</span>
            </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>      
                PROFESOR           
        <v-spacer></v-spacer>
            
            <v-toolbar-items>
            <v-btn text  v-on:click="select3()">Asignatura</v-btn>
            <v-btn text  v-on:click="select()"> Alumno</v-btn>
            
            </v-toolbar-items>
        </v-app-bar>
        <div class="container">
            <v-card>
                <v-card-actions>

                    <!-- Dialogo Profesor -->
                    <v-dialog v-model="dialog" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">
                            <v-btn text class="green darken-4 text-center" dark v-on="on">Registrar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Registro Profesor</span>
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
                                    v-validate="'required'" 
                                    required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Telefono*" 
                                    v-model="telefono"
                                    v-validate="'required'"
                                    @keypress="isNumber($event)"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Matricula*" 
                                    v-model="matricula"
                                    v-validate="'required'"
                                    @keypress="isNumber($event)"
                                    required
                                    ></v-text-field>
                                </v-flex>                                
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="materias"
                                    item-text="nombre"
                                    item-value="id"
                                    label="Asignaturas*"                                    
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
                    <!-- Dialogo Profesor -->
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm3 d-flex>
                        <v-select
                        :items="profesores"
                        item-text="nombre"
                        item-value="id"
                        label="Profesores"
                        v-model="profesor_select"
                        @change="getProfesor()"
                        ></v-select>
                    </v-flex>
                    
                    <v-spacer></v-spacer>

                    <!-- Dialogo Profesor Actualizar-->
                    <v-dialog v-model="dialog2" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">                            
                            <v-btn text class="indigo darken-4 text-center" dark v-on="on">Actualizar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Actualizar Profesor</span>
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
                                    @keypress="isNumber($event)"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Matricula*" 
                                    v-model="matricula_db"
                                    v-validate="'required'"
                                    @keypress="isNumber($event)"
                                    required
                                    ></v-text-field>
                                </v-flex>                                
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="materias"
                                    item-text="nombre"
                                    item-value="id"
                                    label="Asignaturas*"                                    
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
                    <!-- Dialogo Profesor Actualizar -->                   
                    
                    <v-btn text class="red accent-4 text-center" dark @click="eliminar">Eliminar</v-btn>                    
                </v-card-actions>
                <v-text-field 
                label="Asignatura" 
                v-model="materia"
                
                disabled
                required
                ></v-text-field>
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
        
        asignatura:0,

        nombre_db:"",
        apellido_p_db:"",
        apellido_m_db:"",
        email_db:"",
        telefono_db:"",
        matricula_db:"",
        
        asignatura_db:0,


        dialog: false,
        dialog2: false,

        profesor_select:0,

        profesores: [],
        materia:"",
        materias:[],

        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Asignatura', value: 'nombre' },
          { text: 'Nombre', value: 'alumnos[0].nombre' },
          { text: 'Fecha', value: 'alumnos[0].asistencias' },
          { text: 'Email', value: 'alumnos[0].correo' },
          { text: 'Telefono', value: 'alumnos[0].telefono' },
          
        ],
        desserts: [],
      }
    },
    created(){
        this.getProfesores()
        this.getAsignaturas()
    },
    methods: {
        select: function() {
            this.$router.push({name:'alumno'})
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
                    url: 'profesor/',
                    data: {
                        nombre: this.nombre,  
                        apellido_paterno: this.apellido_p,
                        apellido_materno: this.apellido_m,                        
                        correo:this.email, 
                        matricula: this.matricula,
                        telefono:this.telefono, 
                        asignatura_id:this.asignatura
                    }
                }).then(function (response) {
                    console.log(response);
                });                
                this.dialog = false;                
                this.clean(); 
                this.getProfesores();                       
            }            
        })
        },
        actualizar () {                    
            this.$validator.validateAll().then(valid =>{
                if(valid){
                    API.put(('profesor/' + this.profesor_select),{
                        nombre: this.nombre_db,  
                        apellido_paterno: this.apellido_p_db,
                        apellido_materno: this.apellido_m_db,
                        correo: this.email_db, 
                        matricula: this.matricula_db,
                        telefono:this.telefono_db,
                        asignatura_id:this.asignatura_db
                    })                                                          
                    this.dialog2 = false;               
                    this.$validator.reset()
                    this.getProfesores()                       
                }            
            })
        },
        eliminar(){
            API({
              method:'delete',
              url:('profesor/' + this.profesor_select),
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

        getAsistencias_Asignatura(asignatura){
            API.get('alumnos/'+ asignatura)
            .then((response)=>{        
                console.log(response.data)        
                this.desserts = response.data    
                this.materia  = response.data[0].nombre       
            })            
        },

        getProfesores(){
            API.get('profesor')
            .then((response)=>{                
                this.profesores = response.data                  
            })            
        },

        getAsignaturas(){
            API.get('asignatura')
            .then((response)=>{                
                this.materias = response.data                  
            })            
        },

        getProfesor(){
            
            API.get('profesor/' + this.profesor_select)
            .then((response)=>{     
                                    
                this.nombre_db = response.data.nombre ,
                this.apellido_p_db= response.data.apellido_paterno ,
                this.apellido_m_db= response.data.apellido_materno ,
                this.email_db= response.data.correo ,
                this.telefono_db= response.data.telefono ,
                this.matricula_db= response.data.matricula,             
                this.asignatura_db = response.data.asignatura_id
                this.getAsistencias_Asignatura(response.data.asignatura_id)
            })  
            
        },    
        
         

    }
  }
</script>