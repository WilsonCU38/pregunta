import { Routes } from '@angular/router';
import { Pregunta } from './pregunta/pregunta';

export const routes: Routes = [
    {
        path:'',
        component: Pregunta,
        pathMatch: "full"
    }
];
