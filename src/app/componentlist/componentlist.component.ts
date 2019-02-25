import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentlist',
  templateUrl: './componentlist.component.html',
  styleUrls: ['./componentlist.component.css']
})
export class ComponentlistComponent implements OnInit {

  libros: Ilibro[];


  constructor() { }

  ngOnInit() {
    this.libros = this.getLibros();
  }

  getLibros(): Ilibro[] {
    return [{
      "nombre": "nombre01",
      "editorial": "edit01",
      "autor": "autor01",
      "edicion": 1
    }, {
      "nombre": "nombre02",
      "editorial": "edit02",
      "autor": "autor02",
      "edicion": 2
    }
    ]

  }
}

interface Ilibro {
  nombre: string;
  editorial: string;
  autor: string;
  edicion: number;

}