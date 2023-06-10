import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {FiliereService} from "../../services/filiere.service";
import {Filiere} from "../../models/Filiere.model";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [MessageService]
})
export class AccueilComponent implements OnInit{
 public filieresFormationInitiale: Filiere[] = [];
  public filieresFormationContinue: Filiere[] = [];
  loadingFormationInitiale = false;
  loadingFormationContinue = false;

  constructor(private filiereService: FiliereService) { }

  ngOnInit(): void {
    this.loadFilieresFormationInitiale();
    this.loadFilieresFormationContinue();
  }

  loadFilieresFormationInitiale(): void {
    this.loadingFormationInitiale = true;
    this.filiereService.getFiliereByFormation("Formation_Continue")
      .subscribe(filieres => {
        this.filieresFormationInitiale = filieres;
        this.loadingFormationInitiale = false;
        console.log(filieres);
        console.log("bonjour")
      });
  }

  loadFilieresFormationContinue(): void {
    this.loadingFormationContinue = true;
    this.filiereService.getFiliereByFormation("Formation_Initiale")
      .subscribe(filieres => {
        this.filieresFormationContinue = filieres;
        this.loadingFormationContinue = false;
      });
  }


}


