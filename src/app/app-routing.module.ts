import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatTemplateComponent } from "./candidat-template/condidat-template.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MonDossierComponent } from './pages/mon-dossier/mon-dossier.component';
import { AddDirectionPedagogiqueComponent } from './pages/add-direction-pedagogique/add-direction-pedagogique.component';
import {AddChefDepartementComponent} from "./add-chef-departement/add-chef-departement.component";
import {MesCandidaturesComponent} from "./pages/mes-candidatures/mes-candidatures.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
 {
    path: "admin", children: [
      { path: "Dashboard", component: DashboardComponent },
      { path: "AddDirectionPedagogique", component: AddDirectionPedagogiqueComponent },
      {path: "AddChefDepartement", component: AddChefDepartementComponent},
    ]
  },
  {
    path: "candidat", children: [
      { path: "acceuil", component: AccueilComponent },
      { path: "MonDossier", component: MonDossierComponent },
       { path: "mesCandidatures", component: MesCandidaturesComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
