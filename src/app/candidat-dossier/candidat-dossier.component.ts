import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { diplome } from "../models/diplome.model";



@Component({
  selector: 'app-candidat-dossier',
  templateUrl: './candidat-dossier.component.html',
  styleUrls: ['./candidat-dossier.component.css'],

})

export class CandidatDossierComponent{

  candidatFormGroup : FormGroup=new FormGroup({
    username: new FormControl("",[Validators.required]),
    prenom: new FormControl("",[Validators.required]),
    cni: new FormControl("",[Validators.required]),
    cne: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    telephone: new FormControl("",[Validators.required]),
    adresse: new FormControl("",[Validators.required]),
    diplome: new FormArray([this.getDiplomeFields()])
  });
   dipArr() {
    return this.candidatFormGroup.get('diplome') as FormArray;
  }

  getDiplomeFields():FormGroup{
     return new FormGroup({
       titre: new FormControl("",[Validators.required]),
       specialite : new FormControl("",[Validators.required]),
       dateObtention :new FormControl("",[Validators.required]),
       etablissement : new FormControl("",[Validators.required])

     });

  }
  addDiploma(){

    this.dipArr().push(this.getDiplomeFields());
    console.log(this.candidatFormGroup);

  }

  removeDiploma(i:number){
    this.dipArr().removeAt(i);
    // const control=<FormArray>this.candidatFormGroup.controls['diplome'];
    // control.removeAt(i);

  }

  username!: string;
  Prenom!: string;
  nom!:string;
  CNI!:string;
  CNE!:string;
  Email!: string;
  Telephone!:string;
  Adresse!:string;
  diplomes : diplome[] = [];


  constructor(private router : Router) {
  }


  onSubmit() {
    console.log(this.diplomes);
    this.router.navigateByUrl("/candidat/monDossier");

  }



}
