import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  step1: boolean = true;
  step2: boolean = false;

  //candida: candidat = new candidat();


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
  handleSuivant(){

    let username :string = this.candidatFormGroup.value.username;
    let prenom :string = this.candidatFormGroup.value.prenom;
    let cin :string = this.candidatFormGroup.value.cin;
    let cne :string = this.candidatFormGroup.value.cne;
    let email :string = this.candidatFormGroup.value.email;
    let telephone :string = this.candidatFormGroup.value.telephone;
    let adresse :string = this.candidatFormGroup.value.adresse;
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
}
