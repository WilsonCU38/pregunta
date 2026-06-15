import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pregunta } from './pregunta/pregunta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pregunta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('preguntas');
}
