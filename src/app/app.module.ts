import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondidatTemplateComponent } from './candidat-template/condidat-template.component';
import { CandidatDossierComponent } from './candidat-dossier/candidat-dossier.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CandidatDossierEtape2Component } from './candidat-dossier-etape2/candidat-dossier-etape2.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    CondidatTemplateComponent,
    CandidatDossierComponent,
    CandidatDossierEtape2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
