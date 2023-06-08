import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Candidat} from "../models/Candidat.model";

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private apiUrl = 'http://localhost:8085/candidat';

  constructor(private http: HttpClient) {}

  saveCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(`${this.apiUrl}/add`, candidat);
  }
}
