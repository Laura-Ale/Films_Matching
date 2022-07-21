import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponente } from './mi-componente/mi-componente.component';
import { FilmsComponent } from './components/films/films.component';
import { TestsComponent } from './components/tests/tests.component';
import { PlataformasComponent } from './plataformas/plataformas.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    FilmsComponent,
    TestsComponent,
    PlataformasComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
