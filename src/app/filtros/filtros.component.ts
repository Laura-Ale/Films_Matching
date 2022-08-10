import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  public boton: string;

  constructor() { 
    this.boton = "aplicar filtros";
   }

  ngOnInit(): void {
  }

}
