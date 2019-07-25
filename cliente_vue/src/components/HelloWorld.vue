<template>
<v-app>
  <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">        
        <span class="font-weight-light">Asistencias</span>
      </v-toolbar-title>
    </v-app-bar>
    
    <v-container>
    <v-layout >
      <v-flex xs12>
          <div v-on:click="select()">
            <a>
              <v-card
              max-width="344"
              class="mx-auto"
              dark
              >
              <v-card-title>Alumnos</v-card-title>
              <v-card-text>Administracion de Alumnos y Asitencias</v-card-text>      
              </v-card>
            </a>            

          </div>
        </v-flex>
        <v-flex xs12 >
          <a>
            <div v-on:click="select2()">
            <v-card
            max-width="344"
            class="mx-auto"
            dark
            >
            <v-card-title>Profesores</v-card-title>
            <v-card-text>Administracion de Profesores</v-card-text>
            </v-card>
          </div>
          </a>
          
          
        </v-flex>
        <v-flex xs12>
          <a>
            <div v-on:click="select3()">
            <v-card
            max-width="344"
            class="mx-auto"
            dark
            >
            <v-card-title>Asignaturas</v-card-title>
            <v-card-text>Administracion de Asignaturas</v-card-text>
           
            </v-card>
            </div>
          </a>
          
          
        </v-flex>         
      
    </v-layout>    
  </v-container>
</v-app>
  
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods: {
        select: function() {
            this.$router.push({name:'alumno'})
        },
        select2: function() {
            this.$router.push({name:'profesor'})
        },
        select3: function() {
            this.$router.push({name:'asignatura'})
        }
    }
};
</script>
