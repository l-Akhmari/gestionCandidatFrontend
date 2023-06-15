import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondidatTemplateComponent } from './candidat-template/condidat-template.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { AddDirectionPedagogiqueComponent } from './pages/add-direction-pedagogique/add-direction-pedagogique.component';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DialogModule } from 'primeng/dialog';
import {CommonModule} from "@angular/common";
import {NgxCaptchaModule} from "ngx-captcha";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from "primeng/accordion";
import { AddChefDepartementComponent } from './add-chef-departement/add-chef-departement.component';
import { MesCandidaturesComponent } from './pages/mes-candidatures/mes-candidatures.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {CardModule} from "primeng/card";
import {UniqueEmailValidator} from "./validators/unique-email-validator";
import {JwtModule, JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    CondidatTemplateComponent,
    AccueilComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
     MonDossierComponent ,
    NavbarComponent,
    AddDirectionPedagogiqueComponent,
    AddChefDepartementComponent,
    MesCandidaturesComponent,
    LoginComponent,
    RegisterComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

        CommonModule,
        ReactiveFormsModule,
        NgxCaptchaModule, FormsModule, BrowserModule,
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
        AccordionModule, CardModule
    ],
  providers: [MessageService,JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
