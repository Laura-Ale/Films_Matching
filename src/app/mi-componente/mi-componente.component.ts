import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "MATCHING";
        this.comentario = "Cosas a comentar...";
        this.year = 2022;

        console.log("Componente loaded");
        console.log(this.comentario);
    }
}