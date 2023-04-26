import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CondidatTemplateComponent} from "./candidat-template/condidat-template.component";
import {CandidatDossierComponent} from "./candidat-dossier/candidat-dossier.component";
import {CandidatDossierEtape2Component} from "./candidat-dossier-etape2/candidat-dossier-etape2.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [

  {path:"", component:CondidatTemplateComponent},
  {path:"candidat", component:CondidatTemplateComponent,children:[
      {path:"accueil",component:AccueilComponent},
      {path:"monDossier",component:CandidatDossierComponent},
      {path:"MondDossier/etape2", component:CandidatDossierEtape2Component}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
