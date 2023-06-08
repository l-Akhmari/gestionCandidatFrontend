import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Candidat } from "../../models/Candidat.model";
import {DiplomeService} from "../../services/diplome.service";
import {Observable} from "rxjs";
import {CandidatService} from "../../services/candidat.service";
import {Diplome} from "../../models/Diplome.model";
import {Fichier} from "../../models/Fichier.model";
//import {diplome} from "../../models/diplome.model"



@Component({
  selector: 'app-mon-dossier',
  templateUrl: './mon-dossier.component.html',
  styleUrls: ['./mon-dossier.component.css'],
})
export class MonDossierComponent implements OnInit{
  constructor(
    private router: Router,
    private messageService: MessageService,
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private diplomeService: DiplomeService,
    private candidatService : CandidatService
  ) { }

  step1: boolean = true;
  step2: boolean = false;

//accountObservable! : Observable<diplome>

//candida: candidat = new candidat();

  public candidats: Candidat[] = [];
  public candidat: Candidat = {
    id: '1',
    cin: '123456789',
    nom: 'John',
    prenom: 'Doe',
    addresse: '123 Main St',
    email: 'johndoe@example.com',
    dateNaissance: new Date('1990-01-01'),
    telephone: '1234567890',
    mdp: 'password123',
    cne: 'A1234567',
    ville: 'City',
    admis: true
  };
  public diplome : Diplome[] = [];
  public diplomeCandidat! : Diplome;
  public fichier! : Fichier;
  candidatFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    cne: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    telephone: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    ville: new FormControl("", [Validators.required]),
   // diplome: new FormArray([this.getDiplomeFields()])
  });
  public getCandidats(): void {
    this.candidatService.getAllCandidats().subscribe(
      (response: Candidat[]) => {
        this.candidats = response;
        console.log(this.candidats);
      },
      (error: HttpErrorResponse) => {

      }

    );

  }


  handleSuivant(){
    this.candidat.nom = this.candidatFormGroup.get('name')?.value;
    this.candidat.prenom = this.candidatFormGroup.get('prenom')?.value;
    this.candidat.cin = this.candidatFormGroup.get('cin')?.value;
    this.candidat.cne = this.candidatFormGroup.get('cne')?.value;
    this.candidat.email = this.candidatFormGroup.get('email')?.value;
    this.candidat.telephone = this.candidatFormGroup.get('telephone')?.value;
    this.candidat.addresse = this.candidatFormGroup.get('adresse')?.value;
    this.candidat.mdp = '111';
    this.candidat.ville = this.candidatFormGroup.get('ville')?.value;
    this.candidat.admis = false;
    console.log('hey log:', this.candidat);




  }

  diplomeFormGroup: FormGroup = new FormGroup({
    typeDiplome: new FormControl("", [Validators.required]),
    specialite: new FormControl("", [Validators.required]),
    anneeObtention: new FormControl("", [Validators.required]),
    etablissement: new FormControl("", [Validators.required]),
    fichier: new FormControl("", [Validators.required]),

  })

  //dipArr() {
    //return this.candidatFormGroup.get('diplome') as FormArray;
  //}
  Suivant() {
    this.step1 = false;
    this.step2 = true;
    const progressBar = this.elementRef.nativeElement.querySelector('.progress-bar');
    this.renderer.setStyle(progressBar, 'width', '100%');
    const st2 = this.elementRef.nativeElement.querySelector('#st2');
    this.renderer.removeClass(st2, 'btn-secondary');
    this.renderer.addClass(st2, 'btn-info');

  }
  Back() {
    this.step1 = true;
    this.step2 = false;
    const progressBar = this.elementRef.nativeElement.querySelector('.progress-bar');
    this.renderer.setStyle(progressBar, 'width', '0%');
    const st2 = this.elementRef.nativeElement.querySelector('#st2');
    this.renderer.removeClass(st2, 'btn-info');
    this.renderer.addClass(st2, 'btn-secondary');
  }
  visible!: boolean;

  showDialog() {
    this.visible = true;
  }

  /*getDiplomeFields(): FormGroup {
    return new FormGroup({
      typeDiplome: new FormControl("", [Validators.required]),
      specialite: new FormControl("", [Validators.required]),
      anneeObtention: new FormControl("", [Validators.required]),
      etablissement: new FormControl("", [Validators.required]),
      fichier: new FormControl("", [Validators.required])

    });

  }*/
  /*addDiploma() {

    this.dipArr().push(this.getDiplomeFields());
    console.log(this.candidatFormGroup);

  }


  removeDiploma(i: number) {
    this.dipArr().removeAt(i);
    // const control=<FormArray>this.candidatFormGroup.controls['diplome'];
    // control.removeAt(i);

  }*/

  ngOnInit(): void {
    this.getCandidats();
  }

  enregisterCandidature() {
    this.fichier = {
      id: "ff",
      chemin: this.diplomeFormGroup.value.fichier
    };

    // Create an instance of 'Diplome' for the 'diplomeCandidat' property
    this.diplomeCandidat = {
      id: 1, // Assign the appropriate value
      typeDiplome: this.diplomeFormGroup.get('typeDiplome')?.value,
      specialiteDiplome: this.diplomeFormGroup.get("specialite")?.value,
      anneeObtention: this.diplomeFormGroup.value.anneeObtention,
      etablissement: this.diplomeFormGroup.value.etablissement,
      candidat: this.candidat,
      fichier: this.fichier
    };

    // Perform any necessary operations with the 'candidat' and 'diplomeCandidat' data
    console.log("diplomeCandidat:", this.diplomeCandidat);

    this.diplomeService.saveDiplome(this.diplomeCandidat, this.candidat, this.fichier).subscribe(
      (response: Diplome) => {
        // Traitement en cas de succès
        console.log('Diplôme sauvegardé:', response);
      },
      (error: any) => {
        // Traitement en cas d'erreur
        console.error('Erreur lors de la sauvegarde du diplôme:', error);
      }
    );
    }

  }
