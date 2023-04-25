import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondidatTemplateComponent } from './candidat-template/condidat-template.component';
import { CandidatDossierComponent } from './candidat-dossier/candidat-dossier.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CandidatDossierEtape2Component } from './candidat-dossier-etape2/candidat-dossier-etape2.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { AccueilComponent } from './accueil/accueil.component';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from "primeng/tabview";


@NgModule({
  declarations: [
    AppComponent,
    CondidatTemplateComponent,
    CandidatDossierComponent,
    CandidatDossierEtape2Component,
    AccueilComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RadioButtonModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        TableModule,
        ToastModule,
        TabViewModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
