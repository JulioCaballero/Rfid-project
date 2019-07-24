import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const appRoutes: Routes = [
  { path: 'alumno', component: AlumnoComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: '', redirectTo: '/alumno', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
