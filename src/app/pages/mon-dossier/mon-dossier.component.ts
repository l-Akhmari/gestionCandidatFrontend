import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Candidat } from "../../models/candidat.model";
import {DiplomeService} from "../../services/diplome.service";
import {Observable} from "rxjs";
import {CandidatService} from "../../services/candidat.service";
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
  public candidat!: Candidat;
  candidatFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    cne: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    telephone: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    ville: new FormControl("", [Validators.required]),
    diplome: new FormArray([this.getDiplomeFields()])
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

    this.candidat.nom = this.candidatFormGroup.value.username;
    this.candidat.Prenom= this.candidatFormGroup.value.prenom;
    this.candidat.CNI = this.candidatFormGroup.value.cin;
    this.candidat.cne = this.candidatFormGroup.value.cne;
    this.candidat.Email = this.candidatFormGroup.value.email;
    this.candidat.Telephone = this.candidatFormGroup.value.telephone;
    this.candidat.Adresse= this.candidatFormGroup.value.adresse;
    this.candidat.mdp="111";
    this.candidat.ville=this.candidatFormGroup.value.ville;
    this.candidat.admis=false;


  }

  diplomeFormGroup: FormGroup = new FormGroup({
    typeDiplome: new FormControl("", [Validators.required]),
    specialite: new FormControl("", [Validators.required]),
    anneeObtention: new FormControl("", [Validators.required]),
    etablissement: new FormControl("", [Validators.required]),

  })

  dipArr() {
    return this.candidatFormGroup.get('diplome') as FormArray;
  }
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

  ngOnInit(): void {
    this.getCandidats();
  }
}
