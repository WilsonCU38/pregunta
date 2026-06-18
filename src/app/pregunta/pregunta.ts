import { Component, inject, OnInit } from '@angular/core';
import { PreguntaServices } from '../services/pregunta.services';
import { IPregunta } from '../interfaces/ipregunta';

@Component({
  selector: 'app-pregunta',
  imports: [],
  templateUrl: './pregunta.html',
  styleUrl: './pregunta.css',
})
export class Pregunta implements OnInit {
  lista: IPregunta[] = []

  private readonly preguntaServicio = inject(PreguntaServices)

  ngOnInit(): void {
    this.preguntaServicio.todos().subscribe(
      (pregunta) => {
        this.lista = pregunta
        console.log(this.lista)
      }
    )
  }
}
