import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { diplome } from "../../models/diplome.model";
import { MessageService } from "primeng/api";
import { HttpClient } from "@angular/common/http";
import { candidat } from "../../models/candidat.model";


@Component({
  selector: 'app-mon-dossier',
  templateUrl: './mon-dossier.component.html',
  styleUrls: ['./mon-dossier.component.css'],
})
export class MonDossierComponent {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  candida: candidat = new candidat();
  diplomes: diplome[] = [];


  candidatFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    cne: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    telephone: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    diplome: new FormArray([this.getDiplomeFields()])
  });

  dipArr() {
    return this.candidatFormGroup.get('diplome') as FormArray;
  }

  visible!: boolean;

  showDialog() {
    this.visible = true;
  }
  getDiplomeFields(): FormGroup {
    return new FormGroup({
      titre: new FormControl("", [Validators.required]),
      specialite: new FormControl("", [Validators.required]),
      dateObtention: new FormControl("", [Validators.required]),
      etablissement: new FormControl("", [Validators.required]),
      file: new FormControl("", [Validators.required])

    });

  }
  addDiploma() {

    this.dipArr().push(this.getDiplomeFields());
    console.log(this.candidatFormGroup);

  }

  removeDiploma(i: number) {
    this.dipArr().removeAt(i);
    // const control=<FormArray>this.candidatFormGroup.controls['diplome'];
    // control.removeAt(i);

  }
}