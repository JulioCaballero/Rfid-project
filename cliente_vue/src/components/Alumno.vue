<template>
    <v-app>
        <v-app-bar app dark> 
        <v-toolbar-title class="headline text-uppercase">        
            <span class="font-weight-light">Asistencias</span>
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
                                    v-validate="'required'" 
                                    required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Telefono*" 
                                    v-model="telefono"
                                    v-validate="'required'"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Matricula*" 
                                    v-model="matricula"
                                    v-validate="'required'"
                                    required
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
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <v-spacer></v-spacer>
                    <!-- Dialogo Alumno -->

                    <v-flex xs12 sm3 d-flex>
                        <v-select
                        :items="alumnos"
                        label="Alumno"
                        ></v-select>
                    </v-flex>
                    <v-btn> Seleccionar</v-btn>
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
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Matricula*" 
                                    v-model="matricula_db"
                                    v-validate="'required'"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="RFID*" 
                                    v-model="rfid_db"
                                    v-validate="'required'"
                                    required
                                    disabled
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="materias"
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
                            <v-btn color="blue darken-1" text @click="dialog2 = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog2 = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <!-- Dialogo Alumno Actualizar -->


                    
                    
                    <v-btn text class="red accent-4 text-center" dark >Eliminar</v-btn>                    
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

 Vue.use(VeeValidate);

  export default {
    data () {
      return {
        nombre:"",
        apellido_p:"",
        apellido_m:"",
        email:"",
        telefono:"",
        matricula:"",
        rfid:"",
        asignatura:[],

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

        alumnos: ['Foo', 'Bar', 'Fizz', 'Buzz'],

        materias:[
            {text: 'Ciencias', id: '1' },
            {text: 'matematicas', id: '2' },
            {text: 'Español', id: '3' },
        ],

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
        desserts: [
          {
            id: '1',
            nombre: 'Braulio',
            RFID: 6.0,
            asignatura: 24,
            fecha: 4.0,
            
          },
          {
            id: '2',
            nombre: 237,
            RFID: 9.0,
            asignatura: 37,
            fecha: 4.3,
           
          },
          {
            id: '3',
            nombre: 262,
            RFID: 16.0,
            asignatura: 23,
            fecha: 6.0,
           
          },
          {
            id: '4',
            nombre: 305,
            RFID: 3.7,
            asignatura: 67,
            fecha: 4.3,
            
          },
        ],
      }
    },
    methods: {
        select2: function() {
            this.$router.push({name:'profesor'})
        },
        select3: function() {
            this.$router.push({name:'asignatura'})
        }
    }
  }
</script>