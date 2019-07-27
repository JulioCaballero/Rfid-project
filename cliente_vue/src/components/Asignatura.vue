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
                            <v-btn text class="green darken-4 text-center" dark v-on="on">Registrar</v-btn>
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
                                    v-validate="'required'"
                                    item-text="horai"
                                    item-value="id"
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
                    <!-- Dialogo Alumno -->
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm3 d-flex>
                        <v-select
                        :items="asignaturas"
                        label="Asignatura"
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
                                    item-text="horai"
                                    item-value="id"
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
        horario:[],

        nombre_db:"",        
        horario_db:[],


        dialog: false,
        dialog2: false,

        asignaturas: ['Foo', 'Bar', 'Fizz', 'Buzz'],     
        
        horarios:[
            {horai: '8', horaf: '9', id: '1' },
            {horai: '9', horaf: '10', id: '2' },
            {horai: '10', horaf: '11', id: '3' },
        ],

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
        ],
        desserts: [
          {
            id: '1',
            nombre: 'Braulio',
            hora_i: 6.0,
            hora_f: 24,
            
            
          },
          {
            id: '2',
            nombre: 237,
            hora_i: 9.0,
            hora_f: 37,
            
           
          },
          {
            id: '3',
            nombre: 262,
            hora_i: 16.0,
            hora_f: 23,
           
           
          },
          {
            id: '4',
            nombre: 305,
            hora_i: 3.7,
            hora_f: 67,
            
            
          },
        ],
      }
    },
    methods: {
        select2: function() {
            this.$router.push({name:'profesor'})
        },
        select: function() {
            this.$router.push({name:'alumno'})
        },
    }
  }
</script>