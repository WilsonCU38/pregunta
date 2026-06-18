import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IPregunta } from '../interfaces/ipregunta';

@Service()
export class PreguntaServices {
    private readonly http = inject(HttpClient);

    ruta: string = "https://localhost:7059/Api/ApiPreguntas";

    todos(): Observable<IPregunta[]>{
        return this.http.get<IPregunta[]>(this.ruta)
    }
}
