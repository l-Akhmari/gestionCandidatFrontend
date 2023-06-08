import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment"
import {Observable} from "rxjs";
import {Diplome} from "../models/Diplome.model"
import {Candidat} from "../models/Candidat.model";
import {Fichier} from "../models/Fichier.model";

@Injectable({
  providedIn: 'root'
})

export class DiplomeService {

    private apiUrl = 'http://localhost:8085/diplome';
  constructor(private http: HttpClient) {}

  addDiplome(diplome: Diplome): Observable<Diplome> {

    return this.http.post<Diplome>(`${this.apiUrl}/add`, diplome);
  }




}


