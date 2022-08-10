import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  public titulo: string;
  public plataforma: Array<string>;
  public boton: string;
  public selected: boolean;
  
  constructor() {
      this.titulo = "plataformas";
      this.plataforma = ['../../assets/imgs/netflix.png', '../../assets/imgs/prime.png'];
      this.boton = "listo";
      this.selected= this.btnSelected();
  }

  public btnSelected():boolean{
    return true;
  }

  ngOnInit(): void {
  }

}
