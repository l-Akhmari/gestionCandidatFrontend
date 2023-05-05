import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatTemplateComponent } from "./candidat-template/condidat-template.component";
import { CandidatDossierComponent } from "./candidat-dossier/candidat-dossier.component";
import { CandidatDossierEtape2Component } from "./candidat-dossier-etape2/candidat-dossier-etape2.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MonDossierComponent } from './pages/mon-dossier/mon-dossier.component';
import { AddDirectionPedagogiqueComponent } from './pages/add-direction-pedagogique/add-direction-pedagogique.component';
const routes: Routes = [

  // {path:"", component:CondidatTemplateComponent},

  //{ path: '', redirectTo: 'admin/Dashboard', pathMatch: 'full' },
 /* {
    path: "admin", children: [
      { path: "Dashboard", component: DashboardComponent },
      { path: "MonDossier", component: MonDossierComponent },
      { path: "AddDirectionPedagogique", component: AddDirectionPedagogiqueComponent },
      { path: "acceuil", component: AccueilComponent },
    ]
  },
  {
    path: "candidat", component: CondidatTemplateComponent, children: [
      { path: "monDossierEX", component: CandidatDossierComponent },
      { path: "MondDossier/etape2", component: CandidatDossierEtape2Component }

    ]
  },*/
  { path:"candidat", component:MonDossierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
