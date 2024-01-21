import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProjetsComponent } from './projets/projets.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {path: 'Presentation', component: PresentationComponent},
  {path: 'Projets/DonkeyKongAI', component: ProjetsComponent},
  {path: '', component: AcceuilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
