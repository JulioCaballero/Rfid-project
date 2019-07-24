import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [MatCardModule, MatButtonModule,MatSelectModule,MatTableModule,MatDialogModule,MatInputModule],
    exports: [MatCardModule, MatButtonModule,MatSelectModule,MatTableModule,MatDialogModule,MatInputModule]
})

export class MaterialModule{}
