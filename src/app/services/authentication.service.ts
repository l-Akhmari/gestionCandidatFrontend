import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../models/user.model";
import {AuthenticationRequest} from "../models/AuthenticationRequest";
import {AuthenticationResponse} from "../models/AuthenticationResponse";
import {RegisterRequest} from "../models/RegisterRequest";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8085/auth';

  public currentUser: User|any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService // Add this line
  ) { }

  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request)
      .pipe(
        tap(response => {
          const decodedToken = this.jwtHelper.decodeToken(response.token);
          this.currentUser = decodedToken.user; // Assuming the user information is stored under 'user' in the token payload
          localStorage.setItem("token",response.token);
        })
      );
  }


  register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, request);
  }

  //authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
  //  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request);
  //}
  isEmailAvailable(email: string): Observable<boolean> {
    const params = new HttpParams().set('email', email);
    return this.http.get<boolean>(`${this.baseUrl}/isEmailAvailable`, { params });
  }
}
