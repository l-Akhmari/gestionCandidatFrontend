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
import {FichierService} from "../../services/fichier.service";
import { ActivatedRoute } from '@angular/router';
import {FiliereService} from "../../services/filiere.service";
import {Filiere} from "../../models/Filiere.model";
import { Subscription } from 'rxjs';


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
    private candidatService : CandidatService,
    private fichierService : FichierService,
    private route: ActivatedRoute,
    private filierService : FiliereService
  ) { }

  step1: boolean = true;
  step2: boolean = false;
  progress: number = 0;
  selectedFile: File | null = null;
  successMessage: string = '';
  errorMessage: string = '';

//accountObservable! : Observable<diplome>

//candida: candidat = new candidat();

  public candidats: Candidat[] = [];
  public candidat!: Candidat;
  public diplome : Diplome[] = [];
  public diplomeCandidat! : Diplome;
  public candidatTest!:Candidat;
  public filier! : Filiere;
  /*public fichier : Fichier={
    id:"aa",
    chemin:"chemin"
  };*/
  candidatFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    cne: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    telephone: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    ville: new FormControl("", [Validators.required]),
    dateNaissance: new FormControl("", [Validators.required]),
    bac: new FormControl("", [Validators.required]),
    bacAnne: new FormControl("", [Validators.required]),
    pays: new FormControl("", [Validators.required]),
    paysObtentionBac: new FormControl("", [Validators.required]),
   // diplome: new FormArray([this.getDiplomeFields()])
  });
  /*public getCandidats(): void {
    this.candidatService.getAllCandidats().subscribe(
      (response: Candidat[]) => {
        this.candidats = response;
        console.log(this.candidats);
      },
      (error: HttpErrorResponse) => {

      }

    );

  }*/


  handleSuivant(){
    this.candidat.nom = this.candidatFormGroup.get('name')?.value;
    this.candidat.prenom = this.candidatFormGroup.get('prenom')?.value;
    this.candidat.cin = this.candidatFormGroup.get('cin')?.value;
    this.candidat.cne = this.candidatFormGroup.get('cne')?.value;
    this.candidat.email = this.candidatFormGroup.get('email')?.value;
    this.candidat.telephone = this.candidatFormGroup.get('telephone')?.value;
    this.candidat.addresse = this.candidatFormGroup.get('adresse')?.value;
    this.candidat.dateNaissance = this.candidatFormGroup.get('dateNaissance')?.value;
    this.candidat.bac = this.candidatFormGroup.get('bac')?.value;
    this.candidat.bacAnneObtention = this.candidatFormGroup.get('bacAnne')?.value;
    this.candidat.pays = this.candidatFormGroup.get('pays')?.value;
    this.candidat.paysObtentionBac = this.candidatFormGroup.get('paysObtentionBac')?.value;
    this.candidat.mdp = '111';
    this.candidat.ville = this.candidatFormGroup.get('ville')?.value;
    this.candidat.admis = false;
    console.log('hey log:', this.candidat);


      this.candidatService.saveCandidat(this.candidat).subscribe(
        (newCandidat) => {
          console.log('Candidat enregistré:', newCandidat);
          this.candidat = { ...newCandidat };
          // Traiter la réponse après l'enregistrement réussi (par exemple, afficher un message de succès)
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement du candidat:', error);
          // Traiter l'erreur (par exemple, afficher un message d'erreur)
        }
      );


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

  private subscription! : Subscription;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const filiereId = params['filiereId'];
      this.subscription = this.filierService.getFiliereById(filiereId)
        .subscribe(filiere => {
          this.filier = filiere;
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  enregisterCandidature() {
      this.handleSuivant();

    this.diplomeCandidat = {
      id: 1, // Assigner la valeur appropriée
      typeDiplome: this.diplomeFormGroup.get('typeDiplome')?.value,
      specialiteDiplome: this.diplomeFormGroup.get("specialite")?.value,
      anneeObtention: this.diplomeFormGroup.value.anneeObtention,
      etablissement: this.diplomeFormGroup.value.etablissement,
      candidatDto: this.candidat,
      fichierDto: this.selectedFile,
      filiereDto: this.filier
    };
    if (this.selectedFile) {
      this.fichierService.upload(this.selectedFile)
        .then(uploadFile => {
          this.successMessage = 'Fichier téléchargé avec succès';
          console.log(this.successMessage + " : " +uploadFile);
          // Traitez le message de succès ici, par exemple, mettez à jour l'affichage avec l'emplacement du fichier téléchargé
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors du téléchargement du fichier:', error);
          if (error === 'La taille du fichier dépasse 4 Mo') {
            this.errorMessage = 'La taille du fichier dépasse 4 Mo. Veuillez uploader un nouveau fichier!';
          } else {
            this.errorMessage = 'Une erreur s\'est produite lors du téléchargement du fichier';
          }
          // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        });
    }

  }

  private enregistrerDiplome() {


    console.log("diplomeCandidat:", this.diplomeCandidat);

    this.diplomeService.addDiplome(this.diplomeCandidat).subscribe(
      (diplome: Diplome) => {
        console.log('Enregistrement réussi !');
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement du diplome:', error);
      }
    );
  }
}
