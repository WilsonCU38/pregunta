import { Component, inject, OnInit } from '@angular/core';
import { PreguntaServices } from '../services/pregunta.services';
import { IPregunta } from '../interfaces/ipregunta';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

  exportarPDF(): void {
    if (this.lista.length === 0) {
      alert('No hay datos para exportar.');
      return;
    }

    const doc = new jsPDF();

    doc.text('Listado de Preguntas', 14, 15);
    doc.setFontSize(10);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 22);

    const bodyData = this.lista.map((p) => [
      String(p.id), 
      typeof p.orden === 'number' ? p.orden : Number(p.orden), 
      String(p.enunciado), 
      String(p.descripcion), 
      typeof p.peso === 'number' ? p.peso : Number(p.peso), 
      'Editar / Eliminar'
    ]);

    autoTable(doc, {
      head: [['Id', 'Orden', 'Enunciado', 'Descripción', 'Peso', 'Acciones']],
      body: bodyData as any,
      theme: 'grid',
      headStyles: { 
        fillColor: [33, 33, 33], 
        textColor: [255, 255, 255] 
      },
      columnStyles: {
        0: { cellWidth: 15, fontStyle: 'bold' },
        1: { cellWidth: 15, fontStyle: 'bold' },
        2: { cellWidth: 40, fontStyle: 'bold' },
        3: { cellWidth: 60 },
        4: { cellWidth: 15, fontStyle: 'bold' },
        5: { cellWidth: 15, halign: 'center' }
      },
      styles: { fontSize: 10, cellPadding: 3 },
      margin: { top: 30 }
    });

    doc.save('preguntas.pdf');
  }
}
