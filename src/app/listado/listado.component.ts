import { Component } from '@angular/core';
import { Alumno } from '../models';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {


  alumnos : Alumno[] = [
    { firstName: 'Tony', lastName: 'Soprano', score: 10},
    { firstName: 'Christopher', lastName: 'Moltisanti', score: 5},
    { firstName: 'Silvio', lastName: 'Dante', score: 9},
    { firstName: 'Paulie', lastName: 'Gualtieri', score: 5},
    { firstName: 'Adriana', lastName: 'La Cerva', score: 7},
    { firstName: 'Carmela', lastName: 'Soprano', score: 5},
    { firstName: 'Jackie', lastName: 'Aprile', score: 8},
    { firstName: 'Furio', lastName: 'Giunta', score: 7},
    { firstName: 'Corrado', lastName: 'Soprano', score: 3},

];

}
