import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Candidat} from "../models/candidat.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http : HttpClient) { }
  public getAllCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`http://localhost:8085/candidat/all`);
  }
}
