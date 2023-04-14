import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { diplome } from "../models/diplome.model";



@Component({
  selector: 'app-candidat-dossier',
  templateUrl: './candidat-dossier.component.html',
  styleUrls: ['./candidat-dossier.component.css'],

})

export class CandidatDossierComponent implements OnInit{

  candidatFormGroup : FormGroup=new FormGroup({
    username: new FormControl("",[Validators.required]),
    Prenom: new FormControl("",[Validators.required]),
    nom: new FormControl("",[Validators.required]),
    CNI: new FormControl("",[Validators.required]),
    Email: new FormControl("",[Validators.required]),
    Telephone: new FormControl("",[Validators.required]),
    Adresse: new FormControl("",[Validators.required]),
    diplome: new FormArray([
      new FormGroup({
        titre: new FormControl("",[Validators.required]),
        specialite : new FormControl("",[Validators.required]),
        dateObtention :new FormControl("",[Validators.required]),
        etablissement : new FormControl("",[Validators.required])

        })
    ])
  });
  get dipArr() {
    return this.candidatFormGroup.get('diplome') as FormArray
  }

  addDiploma(){

    const control=<FormArray>this.candidatFormGroup.controls['diplome'];
    control.push(
      new FormGroup({
        titre: new FormControl("",[Validators.required]),
        specialite : new FormControl("",[Validators.required]),
        dateObtention :new FormControl("",[Validators.required]),
        etablissement : new FormControl("",[Validators.required])

      })
    );
  }

  removeDiploma(i:number){

    const control=<FormArray>this.candidatFormGroup.controls['diplome'];
    control.removeAt(i);

  }

  username!: string;
  Prenom!: string;
  nom!:string;
  CNI!:string;
  CNE!:string;
  Email!: string;
  Telephone!:string;
  Adresse!:string;
  diplome=new diplome();
  diplomes : diplome[] = [];


  constructor(private router : Router) {
  }
  ngOnInit(): void {
    this.diplome=new diplome();
    this.diplomes.push(this.diplome);
  }



  onSubmit() {
    console.log(this.diplomes);
    this.router.navigateByUrl("/candidat/monDossier");

  }



}
