import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-candidat-dossier',
  templateUrl: './candidat-dossier.component.html',
  
  styleUrls: ['./candidat-dossier.component.css'],

})



export class CandidatDossierComponent implements OnInit{
  candidatFormGroup! : FormGroup;
  username!: string;
  Prenom!: string;
  nom!:string;
  CNI!:string;
  CNE!:string


  constructor(private router : Router) {
  }
  ngOnInit(): void {
  }

  handleEtape2() {
    this.router.navigateByUrl("/candidat/etape2");

  }
  handleEtape1() {
    this.router.navigateByUrl("/candidat/monDossier");

  }
}
