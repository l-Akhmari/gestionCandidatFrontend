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

import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";

import { AccueilComponent } from './pages/accueil/accueil.component';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from "primeng/tabview";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MonDossierComponent } from './pages/mon-dossier/mon-dossier.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DialogModule } from 'primeng/dialog';
;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from "primeng/accordion";

@NgModule({
  declarations: [
    AppComponent,
    CondidatTemplateComponent,
    CandidatDossierComponent,

    CandidatDossierEtape2Component,
    AccueilComponent,
    DashboardComponent,
    MonDossierComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,

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
        FileUploadModule,
        HttpClientModule,
        TabViewModule,
        DialogModule,
        BrowserAnimationsModule,
        AccordionModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
