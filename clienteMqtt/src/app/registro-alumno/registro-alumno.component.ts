import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {
  constructor() { }
  nombre='';
  apellido_p='';
  apellido_m='';
  rfid='';
  email='';
  matricula='';
  telefono='';

  asignaturas= [];
  asignaturas_db: string[] = ['Matematicas', 'Español', 'Ciencias'];
  nombre_c=[];
  ngOnInit() {
  }

 
}
