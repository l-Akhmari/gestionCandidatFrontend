import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidat-dossier-etape2',
  templateUrl: './candidat-dossier-etape2.component.html',
  styleUrls: ['./candidat-dossier-etape2.component.css']
})
export class CandidatDossierEtape2Component implements OnInit{


  candidatFormGroup! : FormGroup;

  constructor(private router : Router) {
  }
  handleEtape2() {
    this.router.navigateByUrl("/candidat/MondDossier/etape2");
  }

  ngOnInit(): void {
  }

  handleEtape1() {
    this.router.navigateByUrl("/candidat/monDossier");

  }

  enregistrer() {

  }
}
