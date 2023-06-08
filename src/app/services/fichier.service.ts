import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fichier} from "../models/Fichier.model";

@Injectable({
  providedIn: 'root'
})
export class FichierService {
  private apiUrl = 'http://localhost:8085/fichier';

  constructor(private http: HttpClient) {}
  addFichier(fichier: Fichier): Observable<Fichier> {
    return this.http.post<Fichier>(`${this.apiUrl}/add`, fichier);
  }
}
