import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {UniqueEmailValidator} from "../../validators/unique-email-validator";
import {RegisterRequest} from "../../models/RegisterRequest";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //providers : [UniqueEmailValidator]
})
export class RegisterComponent {
  public registrationFormGroup! : FormGroup;
  public registerRequest : RegisterRequest | any;
  errorMessage : any;
  public formStatus : number=0;
  constructor(private fb : FormBuilder, private authService : AuthenticationService,
             ) {
    this.registrationFormGroup=this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : ['']
    });
  }
  ngOnInit() {
  this.registerRequest={};
    this.registrationFormGroup=this.fb.group({
      firstName : this.fb.control(''),
      lastName : this.fb.control(''),
      email : this.fb.control(''),
      password : this.fb.control('')
    });
  }


  get firstName() {
    return this.registrationFormGroup.controls['firstName'];
  }
  get lastName() {
    return this.registrationFormGroup.controls['lastName'];
  }
  get email() {
    return this.registrationFormGroup.controls['email'];
  }
  get password() {
    return this.registrationFormGroup.controls['password'];
  }

  // this.registerRequest.firstName = this.registrationFormGroup.controls['firstName'];


  // this.registrationFormGroup.controls['lastName'];


    // this.registrationFormGroup.controls['email'];


    // this.registrationFormGroup.controls['password'];




  registerUser() {
    this.registerRequest.firstname = this.registrationFormGroup.get('firstName')?.value;
    this.registerRequest.lastname = this.registrationFormGroup.get('lastName')?.value;
    this.registerRequest.email = this.registrationFormGroup.get('email')?.value;
    this.registerRequest.password = this.registrationFormGroup.get('password')?.value;
    this.registerRequest.role = "user";

    console.log("register info: ", this.registerRequest);

    this.authService.register(this.registerRequest).subscribe({
      next: value => {
        this.formStatus = 1;
      },
      error: err => {
        this.formStatus = 2;
        this.errorMessage = err.error.error;
        console.log("hani hna register ", this.registerRequest);
      }
    });
  }


}
