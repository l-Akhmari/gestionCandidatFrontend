import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Candidat} from "../models/Candidat.model";

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http : HttpClient) { }
  public getAllCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`http://localhost:8085/candidat/all`);
  }
}
