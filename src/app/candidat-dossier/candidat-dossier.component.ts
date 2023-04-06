import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-candidat-dossier',
  templateUrl: './candidat-dossier.component.html',
  styleUrls: ['./candidat-dossier.component.css']
})

interface Categorie {
  name : string;
  key : string
}

export class CandidatDossierComponent implements OnInit{
  candidatFormGroup! : FormGroup;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ]

  selectedCategory: any;

  constructor(private router : Router) {
  }
  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }

  handleEtape2() {
    this.router.navigateByUrl("/candidat/etape2");

  }
  handleEtape1() {
    this.router.navigateByUrl("/candidat/monDossier");

  }
}
