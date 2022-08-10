import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from '../app/peliculas/peliculas.component';
import { PlataformasComponent } from './plataformas/plataformas.component';

const routes: Routes = [
  {
    path:'',
    component:PlataformasComponent
  },
  {
    path: 'peliculas', component:PeliculasComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
