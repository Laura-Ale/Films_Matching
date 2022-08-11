import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  public titulo: string;
  public filtros: Array<string>;
  public genero: Array<string>;
  public idioma: Array<string>;
  public premio: Array<string>;
  public boton: string;
  public pie: string;

  constructor() { 
    this.titulo = "filtros";
    this.filtros = ["genero", "duración", "actor/es", "director/es", "año", "puntuacion", "idioma", "premios"];
    this.genero = ["romance", "terror", "drama", "fantasía", "+"];
    this.idioma = ["inglés", "español", "turco", "+"];
    this.premio = ["goya", "óscar", "+"];
    this.boton = "aplicar filtros";
    this.pie = "Borrar filtros";
   }

  ngOnInit(): void {
  }

}
