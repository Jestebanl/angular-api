import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: any[] = [];

  constructor(private servicio:DataService){ }//Inyectar el servicio - inyección de depencias
  ngOnInit(){//ciclo de vida de inicialización
    this.servicio.getPosts().subscribe((data:any[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }
}
