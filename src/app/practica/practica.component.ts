import { Component } from '@angular/core';
import { ServicioPracticaService } from '../servicio-practica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],//NO import HttpClient porque está en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  public datos:any[]=[];//guardar los datos que se obtengan del servicio
  constructor(private servicio:ServicioPracticaService) { }//inyectar la dependencia de ServicioPracticaService

  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos) => {
        this.datos=datos;//renderiza y pinta en template html
      });
  }//cierra ngOnInit

}//cierra clase
