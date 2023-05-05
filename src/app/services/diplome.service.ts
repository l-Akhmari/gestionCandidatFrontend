import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment"
import {Observable} from "rxjs";
import {Diplome} from "../models/diplome.model"

@Injectable({
  providedIn: 'root'
})

/*export class DiplomeService {

  constructor(private http : HttpClient) { }
  public addCandidat(username : string, prenom : string, cin:string, cne:string, email:string, telephone:string, ville:string, adresse:string,admis:boolean,dateNaissance:Date,mdp:string){
    let data={nom : username, prenom : prenom, cin : cin, cne:cne, email : email, telephone : telephone, dateNaissance:null,mdp: null,ville:null,admis:null}
    return this.http.post(environment.backendHost+"/candidat/add",data);
  }

}*/
export class DiplomeService {
 // private apiServerUrl = environment.backendHost;

  constructor(private http : HttpClient) { }
 /* public addCandidat(username : string, prenom : string, cin:string, cne:string, email:string, telephone:string, ville:string, adresse:string,admis:boolean,dateNaissance:Date,mdp:string) {
    let data = {
      nom: username,
      prenom: prenom,
      cin: cin,
      cne: cne,
      email: email,
      telephone: telephone,
      dateNaissance: null,
      mdp: null,
      ville: null,
      admis: null
    }
    return this.http.post(`${this.apiServerUrl}/candidat/add`, data);
  }*/

}
