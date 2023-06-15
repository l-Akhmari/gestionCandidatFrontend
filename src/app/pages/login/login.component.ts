import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../models/AuthenticationRequest";
import {AuthenticationResponse} from "../../models/AuthenticationResponse";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public errormessage : any;
  public user : User | any;
  public authReq : AuthenticationRequest | any;
  loginFormGroup! : FormGroup;
  public autResponse : AuthenticationResponse | any;
  constructor(private fb : FormBuilder, private authservice : AuthenticationService, private router : Router,
              private jwtHelper: JwtHelperService) {
    this.loginFormGroup = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  public currentUser : User |any;
  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      email : this.fb.control(''),
      password : this.fb.control('')
    });
    this.authReq={}
    const token = localStorage.getItem('token');
    if (token) {
      this.currentUser = this.jwtHelper.decodeToken(token);
    }

}

  handleLogin() {
    this.authReq.email=this.loginFormGroup.value.email;
    this.authReq.password=this.loginFormGroup.value.password;
    console.log("hani hna ",this.authReq)
    this.authservice.authenticate(this.authReq).subscribe({
      next:response=>{
        this.autResponse=response;
        console.log("token user: ", this.currentUser.user.role)
    if(this.currentUser.user.role == 'admin'){
      this.router.navigateByUrl('/admin/Dashboard')
    }

        if(this.currentUser.user.role == 'user'){
          this.router.navigateByUrl('/candidat/acceuil')
        }

      },
      error:err => {
        this.errormessage= err
        console.log("hani hna ",this.authReq)

      }
    })
  }
}
